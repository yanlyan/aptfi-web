import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { merge, pipe } from 'rxjs';
import { delay, mergeAll } from 'rxjs/operators';
import { RegForum } from 'src/app/master/reg-forum.model';
import { RegForumService } from 'src/app/master/reg-forum.service';
import { Prodi } from '../user.model';
import { UserState, UserStateModel } from '../user.state';
import { UserRegisterService } from './user-register.service';

declare const window: any;

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
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

  step = 0;
  regForums: RegForum[];
  @ViewChild('title') institute: any;

  forced: boolean = false;

  constructor(
    private store: Store,
    private regForumService: RegForumService,
    private userRegister: UserRegisterService,
    private _FileSaverService: FileSaverService
  ) {}

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
      prodiStudents: new FormControl(null, [Validators.required]),
      prodiStudentsYear: new FormControl(null, [Validators.required]),
      prodiPhone: new FormControl(null, [Validators.required]),
      prodiHead: new FormControl(null, [Validators.required]),
      prodiHeadPhone: new FormControl(null, [Validators.required]),
      prodiHeadEmail: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.s2Form = new FormGroup({
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

    this.store.select(UserState).subscribe((state: UserStateModel) => {
      if (state.member) {
        this.instituteForm.controls['foundationName'].setValue(state.member.foundationName);
        this.instituteForm.controls['headOfFoundation'].setValue(state.member.headOfFoundation);
        this.instituteForm.controls['universityName'].setValue(state.member.universityName);
        this.instituteForm.controls['rectorName'].setValue(state.member.rectorName);
        this.instituteForm.controls['universityAddress'].setValue(state.member.universityAddress);
        this.instituteForm.controls['regForum'].setValue(state.member.regForumId);

        this.facultyForm.controls['facultyName'].setValue(state.member.facultyName);
        this.facultyForm.controls['deanName'].setValue(state.member.deanName);
        this.facultyForm.controls['facultyAddress'].setValue(state.member.facultyAddress);
        this.facultyForm.controls['facultyPhone'].setValue(state.member.facultyPhone);
        this.facultyForm.controls['facultyWebsite'].setValue(state.member.facultyWebsite);
        this.facultyForm.controls['facultyEmail'].setValue(state.member.facultyEmail);

        const s1: Prodi = state.member.prodis.filter((p) => p.prodiType === 's1')[0];
        if (s1) {
          this.s1Form.controls['prodiName'].setValue(s1.prodiName);
          this.s1Form.controls['prodiPermit'].setValue(s1.prodiPermit);
          this.s1Form.controls['prodiAccreditedBy'].setValue(s1.prodiAccreditedBy);
          this.s1Form.controls['prodiAccreditedNo'].setValue(s1.prodiAccreditedNo);
          this.s1Form.controls['prodiStudents'].setValue(s1.prodiStudents);
          this.s1Form.controls['prodiStudentsYear'].setValue(s1.prodiStudentsYear);
          this.s1Form.controls['prodiPhone'].setValue(s1.prodiPhone);
          this.s1Form.controls['prodiHead'].setValue(s1.prodiHead);
          this.s1Form.controls['prodiHeadPhone'].setValue(s1.prodiHeadPhone);
          this.s1Form.controls['prodiHeadEmail'].setValue(s1.prodiHeadEmail);
        }

        const s2: Prodi = state.member.prodis.filter((p) => p.prodiType === 's2')[0];
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

        const pspa: Prodi = state.member.prodis.filter((p) => p.prodiType === 'pspa')[0];
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

        if (state.member.dosenFileS1) {
          this.dosenS1Form.controls['fileDosen'].setValidators([]);
          this.dosenS1Form.controls['fileDosen'].updateValueAndValidity();
        }

        this.validatePanel();
      }
    });
  }

  validatePanel() {
    let step = 0;
    this.instituteValidity = this.instituteForm.valid;
    if (this.instituteValidity) {
      step = 1;
    }

    this.facultyValidity = this.facultyForm.valid;
    if (this.facultyValidity) {
      step = 2;
    }

    this.s1Validity = this.s1Form.valid;
    if (this.s1Validity) {
      step = 3;
    }

    this.s2Validity = this.s2Form.valid;
    if (this.s2Validity) {
      step = 4;
    }

    this.pspaValidity = this.pspaForm.valid;
    if (this.pspaValidity) {
      step = 5;
    }

    this.dosenS1Validity = this.dosenS1Form.valid;
    if (this.dosenS1Validity) {
      step = 6;
    }

    if (
      this.instituteValidity &&
      this.facultyValidity &&
      this.s1Validity &&
      this.s2Validity &&
      this.pspaValidity &&
      this.dosenS1Validity
    ) {
      this.paymentButtonStatus = true;
    } else {
      this.paymentButtonStatus = false;
    }

    this.setStep(step);
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
            this.validatePanel();
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
        .saveInstitute(this.facultyForm.value)
        .pipe(delay(500))
        .subscribe(
          () => {
            this.facultyLoading = false;
            this.validatePanel();
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
            this.validatePanel();
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
            this.validatePanel();
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
            this.validatePanel();
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
          this.validatePanel();
        },
        (err) => {
          this.dosenS1Loading = false;
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
          this.nextStep();
        },
        (err) => {
          this.dosenPspaLoading = false;
        }
      );
    }
  }

  onSarpraSubmit() {
    if (this.sarpraForm.valid) {
      this.dosenPspaLoading = true;
      const data = new FormData();
      data.append('file', this.sarpraForm.value.file._files[0]);
      this.userRegister.uploadSarpra(data).subscribe(
        () => {
          this.sarpraLoading = false;
          this.nextStep();
        },
        (err) => {
          this.sarpraLoading = false;
        }
      );
    }
  }

  onPaymentButtonClicked() {
    window.snap.pay('208dd7c4-96b1-4f80-8d7e-11e292f1c5b6');
  }

  downloadTemplate(e: any) {
    this.userRegister.downloadTemplate().subscribe((res) => {
      this._FileSaverService.save(res, 'Template Dosen.xlsx', 'xlsx');
      e.preventDefault();
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
