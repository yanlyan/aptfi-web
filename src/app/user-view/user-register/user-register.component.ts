import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { delay, finalize, mergeMap, tap } from 'rxjs/operators';
import { SetLoadingState } from 'src/app/admin-view/admin-loading.state';
import { RegForum } from 'src/app/master/reg-forum.model';
import { RegForumService } from 'src/app/master/reg-forum.service';
import { TagihanService } from '../tagihan/tagihan.service';
import { Member, Prodi } from '../user.model';
import { UserService } from '../user.service';
import { SetRegisterStatus } from '../user.state';
import { UserRegisterService } from './user-register.service';

declare const window: any;

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit, AfterViewInit {
  instituteForm: FormGroup;
  instituteLoading: boolean = false;
  instituteValidity: boolean = false;

  facultyForm: FormGroup;
  facultyLoading: boolean = false;
  facultyValidity: boolean = false;

  s1Form: FormGroup;
  s1Loading: boolean = false;
  s1Validity: boolean = false;

  s2Form: FormGroup;
  s2Loading: boolean = false;
  s2Validity: boolean = false;

  pspaForm: FormGroup;
  pspaLoading: boolean = false;
  pspaValidity: boolean = false;

  dosenS1Form: FormGroup;
  dosenS1Loading: boolean = false;
  dosenS1Validity: boolean = false;

  dosenPspaForm: FormGroup;
  dosenPspaLoading: boolean = false;
  dosenPspaValidity: boolean = false;

  sarpraForm: FormGroup;
  sarpraLoading: boolean = false;
  sarpraValidity: boolean = false;

  paymentButtonStatus: boolean = false;
  paymentLoading: boolean = false;

  step = 0;
  regForums: RegForum[];
  @ViewChild('title') institute: any;

  @ViewChild('stepper') stepper: MatStepper;

  state: Member;

  forced: boolean = false;

  constructor(
    private store: Store,
    private regForumService: RegForumService,
    private userRegister: UserRegisterService,
    private userService: UserService,
    private _FileSaverService: FileSaverService,
    private tagihanService: TagihanService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.store.dispatch(new SetLoadingState(true));
  }
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.regForumService.getAll().subscribe((response) => {
      this.regForums = response.data;
    });

    this.instituteForm = new FormGroup({
      foundationName: new FormControl(null, [Validators.required]),
      headOfFoundation: new FormControl(null, [Validators.required]),
      universityName: new FormControl(null, [Validators.required]),
      rectorName: new FormControl(null, [Validators.required]),
      universityAddress: new FormControl(null, [Validators.required]),

      regForum: new FormControl(null, [Validators.required]),
    });

    this.facultyForm = new FormGroup({
      facultyName: new FormControl(null, [Validators.required]),
      deanName: new FormControl(null, [Validators.required]),
      facultyAddress: new FormControl(null, [Validators.required]),
      facultyPhone: new FormControl(null, [Validators.required]),
      facultyWebsite: new FormControl(null, [Validators.required]),
      facultyEmail: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.s1Form = new FormGroup({
      prodiName: new FormControl(null, [Validators.required]),
      prodiPermit: new FormControl(null, [Validators.required]),
      prodiAccreditedBy: new FormControl(null, [Validators.required]),
      prodiAccreditedNo: new FormControl(null, [Validators.required]),
      prodiEmail: new FormControl(null, [Validators.required]),
      prodiStudents: new FormControl(null, [Validators.required]),
      prodiStudentsYear: new FormControl(null, [Validators.required]),
      prodiPhone: new FormControl(null, [Validators.required]),
      prodiHead: new FormControl(null, [Validators.required]),
      prodiHeadPhone: new FormControl(null, [Validators.required]),
      prodiHeadEmail: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.s2Form = new FormGroup({
      prodiName: new FormControl(null, []),
      prodiPermit: new FormControl(null, []),
      prodiAccreditedBy: new FormControl(null, []),
      prodiAccreditedNo: new FormControl(null, []),
      prodiStudents: new FormControl(null, []),
      prodiStudentsYear: new FormControl(null, []),
      prodiPhone: new FormControl(null, []),
      prodiHead: new FormControl(null, []),
      prodiHeadPhone: new FormControl(null, []),
      prodiHeadEmail: new FormControl(null, [Validators.email]),
    });

    this.pspaForm = new FormGroup({
      prodiName: new FormControl(null, [Validators.required]),
      prodiPermit: new FormControl(null, [Validators.required]),
      prodiAccreditedBy: new FormControl(null, [Validators.required]),
      prodiAccreditedNo: new FormControl(null, [Validators.required]),
      prodiStudents: new FormControl(null, [Validators.required]),
      prodiStudentsYear: new FormControl(null, [Validators.required]),
      prodiPhone: new FormControl(null, [Validators.required]),
      prodiHead: new FormControl(null, [Validators.required]),
      prodiHeadPhone: new FormControl(null, [Validators.required]),
      prodiHeadEmail: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.dosenS1Form = new FormGroup({
      fileDosen: new FormControl(null, [Validators.required]),
    });
    this.dosenPspaForm = new FormGroup({
      file: new FormControl(null, []),
    });
    this.sarpraForm = new FormGroup({
      file: new FormControl(null, []),
    });

    this.dosenS1Form.valueChanges.subscribe((e) => {
      if (e.fileDosen && !this.forced) {
        this.forced = true;
        this.dosenS1Form.controls['fileDosen'].setValidators([Validators.required]);
        this.dosenS1Form.controls['fileDosen'].updateValueAndValidity();
      }
    });
    this.userService
      .getDetailMember('none')
      .pipe(
        tap(() => {}),
        finalize(() => {
          this.store.dispatch(new SetLoadingState(false));
        })
      )
      .subscribe((result: any) => {
        this.state = result.member;
        if (this.state) {
          this.instituteForm.controls['foundationName'].setValue(this.state.foundationName);
          this.instituteForm.controls['headOfFoundation'].setValue(this.state.headOfFoundation);
          this.instituteForm.controls['universityName'].setValue(this.state.universityName);
          this.instituteForm.controls['rectorName'].setValue(this.state.rectorName);
          this.instituteForm.controls['universityAddress'].setValue(this.state.universityAddress);
          this.instituteForm.controls['regForum'].setValue(this.state.regForumId);
          if (this.instituteForm.valid) {
            this.stepper.selected.completed = true;
            this.stepper.next();
          }

          this.facultyForm.controls['facultyName'].setValue(this.state.facultyName);
          this.facultyForm.controls['deanName'].setValue(this.state.deanName);
          this.facultyForm.controls['facultyAddress'].setValue(this.state.facultyAddress);
          this.facultyForm.controls['facultyPhone'].setValue(this.state.facultyPhone);
          this.facultyForm.controls['facultyWebsite'].setValue(this.state.facultyWebsite);
          this.facultyForm.controls['facultyEmail'].setValue(this.state.facultyEmail);
          if (this.facultyForm.valid) {
            // this.stepper.selectedIndex = 2;
            this.stepper.next();
          }

          const s1: Prodi = this.state.prodis.filter((p) => p.prodiType === 's1')[0];
          if (s1) {
            this.s1Form.controls['prodiName'].setValue(s1.prodiName);
            this.s1Form.controls['prodiPermit'].setValue(s1.prodiPermit);
            this.s1Form.controls['prodiAccreditedBy'].setValue(s1.prodiAccreditedBy);
            this.s1Form.controls['prodiAccreditedNo'].setValue(s1.prodiAccreditedNo);
            this.s1Form.controls['prodiEmail'].setValue(s1.prodiEmail);
            this.s1Form.controls['prodiStudents'].setValue(s1.prodiStudents);
            this.s1Form.controls['prodiStudentsYear'].setValue(s1.prodiStudentsYear);
            this.s1Form.controls['prodiPhone'].setValue(s1.prodiPhone);
            this.s1Form.controls['prodiHead'].setValue(s1.prodiHead);
            this.s1Form.controls['prodiHeadPhone'].setValue(s1.prodiHeadPhone);
            this.s1Form.controls['prodiHeadEmail'].setValue(s1.prodiHeadEmail);
            if (this.s1Form.valid) {
              // this.stepper.selectedIndex = 3;
              this.stepper.next();
            }
          }

          if (this.state.dosenFileS1) {
            this.dosenS1Form.controls['fileDosen'].setValue(this.state.dosenFileS1);
            if (this.dosenS1Form.valid) {
              this.stepper.selected.completed = true;
              this.stepper.next();
            }
          }

          const s2: Prodi = this.state.prodis.filter((p) => p.prodiType === 's2')[0];
          if (s2) {
            this.s2Form.controls['prodiName'].setValue(s2.prodiName);
            this.s2Form.controls['prodiPermit'].setValue(s2.prodiPermit);
            this.s2Form.controls['prodiAccreditedBy'].setValue(s2.prodiAccreditedBy);
            this.s2Form.controls['prodiAccreditedNo'].setValue(s2.prodiAccreditedNo);
            this.s2Form.controls['prodiStudents'].setValue(s2.prodiStudents);
            this.s2Form.controls['prodiStudentsYear'].setValue(s2.prodiStudentsYear);
            this.s2Form.controls['prodiPhone'].setValue(s2.prodiPhone);
            this.s2Form.controls['prodiHead'].setValue(s2.prodiHead);
            this.s2Form.controls['prodiHeadPhone'].setValue(s2.prodiHeadPhone);
            this.s2Form.controls['prodiHeadEmail'].setValue(s2.prodiHeadEmail);
          }

          const pspa: Prodi = this.state.prodis.filter((p) => p.prodiType === 'pspa')[0];
          if (pspa) {
            this.pspaForm.controls['prodiName'].setValue(pspa.prodiName);
            this.pspaForm.controls['prodiPermit'].setValue(pspa.prodiPermit);
            this.pspaForm.controls['prodiAccreditedBy'].setValue(pspa.prodiAccreditedBy);
            this.pspaForm.controls['prodiAccreditedNo'].setValue(pspa.prodiAccreditedNo);
            this.pspaForm.controls['prodiStudents'].setValue(pspa.prodiStudents);
            this.pspaForm.controls['prodiStudentsYear'].setValue(pspa.prodiStudentsYear);
            this.pspaForm.controls['prodiPhone'].setValue(pspa.prodiPhone);
            this.pspaForm.controls['prodiHead'].setValue(pspa.prodiHead);
            this.pspaForm.controls['prodiHeadPhone'].setValue(pspa.prodiHeadPhone);
            this.pspaForm.controls['prodiHeadEmail'].setValue(pspa.prodiHeadEmail);
          }
          this.validatePanel();
        }
      });
  }

  onInstituteSubmit() {
    if (this.instituteForm.valid) {
      this.instituteLoading = true;
      this.userRegister
        .saveInstitute(this.instituteForm.value)
        .pipe(delay(500))
        .subscribe(
          () => {
            this.instituteLoading = false;
            this.stepper.next();
            // this.validatePanel();
          },
          (err) => {
            this.instituteLoading = false;
          }
        );
    }
  }

  onFacultySubmit() {
    if (this.facultyForm.valid) {
      this.facultyLoading = true;
      this.userRegister
        .saveFaculty(this.facultyForm.value)
        .pipe(delay(500))
        .subscribe(
          () => {
            this.facultyLoading = false;
            this.stepper.next();
            // this.validatePanel();
          },
          (err) => {
            this.facultyLoading = false;
          }
        );
    }
  }

  onS1Submit() {
    if (this.s1Form.valid) {
      this.s1Loading = true;
      this.userRegister
        .saveProdi(this.s1Form.value, 's1')
        .pipe(delay(500))
        .subscribe(
          () => {
            this.s1Loading = false;
            this.stepper.next();

            // this.validatePanel();
          },
          (err) => {
            this.s1Loading = false;
          }
        );
    }
  }

  onS2Submit() {
    if (this.s2Form.valid) {
      this.s2Loading = true;
      this.userRegister
        .saveProdi(this.s2Form.value, 's2')
        .pipe(delay(500))
        .subscribe(
          () => {
            this.s2Loading = false;
            this.stepper.next();

            // this.validatePanel();
          },
          (err) => {
            this.s2Loading = false;
          }
        );
    }
  }
  onPspaSubmit() {
    if (this.pspaForm.valid) {
      this.pspaLoading = true;
      this.userRegister
        .saveProdi(this.pspaForm.value, 'pspa')
        .pipe(delay(500))
        .subscribe(
          () => {
            this.pspaLoading = false;
            this.stepper.next();

            // this.validatePanel();
          },
          (err) => {
            this.pspaLoading = false;
          }
        );
    }
  }

  onDosenS1Submit() {
    if (this.dosenS1Form.valid) {
      this.dosenS1Loading = true;
      const data = new FormData();
      data.append('file', this.dosenS1Form.value.fileDosen._files[0]);
      data.append('type', 's1');
      this.userRegister.uploadFileDosen(data).subscribe(
        () => {
          this.dosenS1Loading = false;
          this.stepper.next();

          // this.validatePanel();
        },
        (err) => {
          this.dosenS1Loading = false;
          this.snackbar.open('Terjadi Kesalahan: Tidak dapat menyimpan data Dosen', 'Tutup', {
            panelClass: ['snackbar-warn'],
          });
        }
      );
    }
  }

  onDosenPspaSubmit() {
    if (this.dosenPspaForm.valid) {
      this.dosenPspaLoading = true;
      const data = new FormData();
      data.append('file', this.dosenPspaForm.value.file._files[0]);
      data.append('type', 'pspa');
      this.userRegister.uploadFileDosen(data).subscribe(
        () => {
          this.dosenPspaLoading = false;
          this.stepper.next();
        },
        (err) => {
          this.dosenPspaLoading = false;
        }
      );
    }
  }

  onSarpraSubmit() {
    if (this.sarpraForm.valid) {
      this.sarpraLoading = true;
      const data = new FormData();
      data.append('file', this.sarpraForm.value.file._files[0]);
      this.userRegister.uploadSarpra(data).subscribe(
        () => {
          this.sarpraLoading = false;
          this.stepper.next();
        },
        (err) => {
          this.sarpraLoading = false;
        }
      );
    }
  }

  onPaymentButtonClicked() {
    this.paymentLoading = true;
    this.userRegister
      .setStatusMember(1)
      .pipe(
        mergeMap((response) => {
          return this.tagihanService.createOrder('register');
        })
      )
      .subscribe(
        () => {
          this.store.dispatch(new SetRegisterStatus(1));
          this.paymentLoading = false;
          this.router.navigate(['tagihan']);
        },
        (err) => {
          this.paymentLoading = false;
        }
      );
  }

  onRegistrationClicked() {
    this.paymentLoading = true;
    this.userRegister.setStatusMember(2).subscribe(
      () => {
        this.store.dispatch(new SetRegisterStatus(2));
        this.paymentLoading = false;
        this.router.navigate(['profil']);
      },
      (err) => {
        this.paymentLoading = false;
      }
    );
  }

  validatePanel() {
    if (
      this.instituteForm.valid &&
      this.facultyForm.valid &&
      this.s1Form.valid &&
      this.pspaForm.valid &&
      this.dosenS1Form.valid
    ) {
      this.paymentButtonStatus = true;
    } else {
      this.paymentButtonStatus = false;
    }
  }

  downloadTemplate(e: any) {
    this.userRegister.downloadTemplate().subscribe((res) => {
      this._FileSaverService.save(res, 'Template Dosen.xlsx', 'xlsx');
      e.preventDefault();
    });
  }
}
