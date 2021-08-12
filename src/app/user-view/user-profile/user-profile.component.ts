import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { defer, of } from 'rxjs';
import { tap, finalize, catchError } from 'rxjs/operators';
import { SetLoadingState } from 'src/app/admin-view/admin-loading.state';
import { AdminVerifyService } from 'src/app/admin-view/admin-verify/admin-verify.service';
import { MemberState, MemberStateModel } from '../member.state';
import { Dosen, Member, Prodi } from '../user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper', { static: true }) stepper: MatStepper;
  firstControl: FormGroup;
  secondControl: FormGroup;
  thirdControl: FormGroup;
  fourthControl: FormGroup;

  done: string = 'number';
  fourthLabel: string = 'Anggota Aktif';

  member: Member;
  s1: Prodi;
  s2: Prodi;
  pspa: Prodi;

  dosenS1: Dosen[];
  dosenPSPA: Dosen[];
  dosenColumns: string[] = [
    'index',
    'dosen_name',
    'dosen_nidn',
    'dosen_birth_date',
    'dosen_position',
    'dosen_expertise',
    'dosen_prodi',
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private adminVerifyService: AdminVerifyService,
    private _FileSaverService: FileSaverService
  ) {
    this.store.dispatch(new SetLoadingState(true));

    this.adminVerifyService
      .getDetailMember('none')
      .pipe(
        finalize(() => {
          this.store.dispatch(new SetLoadingState(false));
        })
      )
      .subscribe((response: any) => {
        this.member = response.member;
        this.s1 = this.member.prodis.filter((prodi) => prodi.prodiType === 's1')[0];
        this.s2 = this.member.prodis.filter((prodi) => prodi.prodiType === 's2')[0];
        this.pspa = this.member.prodis.filter((prodi) => prodi.prodiType === 'pspa')[0];
        this.dosenS1 = this.member.dosens.filter((p) => p.dosenType === 's1');
        this.dosenPSPA = this.member.dosens.filter((p) => p.dosenType === 'pspa');
      });
  }
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.firstControl = this._formBuilder.group({
      required: ['', Validators.required],
    });
    this.secondControl = this._formBuilder.group({
      required: ['', Validators.required],
    });
    this.thirdControl = this._formBuilder.group({
      required: ['', Validators.required],
    });
    this.fourthControl = this._formBuilder.group({
      required: ['', Validators.required],
    });

    this.store.select(MemberState).subscribe((state: MemberStateModel) => {
      const status: number = state.member?.registerLastStatus;
      if (status) {
        if (status >= 0) {
          this.stepper.selectedIndex = 0;
        }
        if (status >= 1) {
          this.firstControl.controls['required'].setValue('required');
          this.firstControl.updateValueAndValidity();
          this.stepper.selectedIndex = 1;
        }
        if (status >= 2) {
          this.secondControl.controls['required'].setValue('required');
          this.secondControl.updateValueAndValidity();
          this.stepper.selectedIndex = 2;
        }
        if (status == 3) {
          this.thirdControl.controls['required'].setValue('required');
          this.thirdControl.updateValueAndValidity();
          this.fourthControl.controls['required'].setValue('required');
          this.fourthControl.updateValueAndValidity();
          this.fourthLabel = 'Ditolak';
          this.done = 'error';
          this.stepper.selectedIndex = 3;
        }
        if (status >= 4) {
          this.thirdControl.controls['required'].setValue('required');
          this.thirdControl.updateValueAndValidity();
          this.fourthControl.controls['required'].setValue('required');
          this.fourthControl.updateValueAndValidity();
          this.done = 'done';
          this.stepper.selectedIndex = 3;
        }
      }
    });
  }

  download(column: string) {
    this.store.dispatch(new SetLoadingState(true));
    this.adminVerifyService.downloadFile(this.member.uuid, column).subscribe(
      (resp) => {
        let fileName = '';
        if (column === 'dosen_file_S1') {
          fileName = `Data Dosen Tetap S1 ${this.member.universityName}`;
        } else if (column === 'dosen_file_pspa') {
          fileName = `Data Dosen Tetap PSPA ${this.member.universityName}`;
        } else if (column === 'dosen_file_sarpra') {
          fileName = `Data Anggaran ${this.member.universityName}`;
        }
        this._FileSaverService.save(resp, fileName, 'xlsx');
        this.store.dispatch(new SetLoadingState(false));
      },
      (err) => {
        this.store.dispatch(new SetLoadingState(false));
      }
    );
  }
}
