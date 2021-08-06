import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { LoadingState, SetLoadingState } from 'src/app/admin-view/admin-loading.state';
import { AdminVerifyService } from 'src/app/admin-view/admin-verify/admin-verify.service';
import { Member, Prodi } from '../user.model';
import { UserState, UserStateModel } from '../user.state';

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
export class UserProfileComponent implements OnInit {
  @ViewChild('stepper', { static: true }) stepper: MatStepper;
  firstControl: FormGroup;
  secondControl: FormGroup;
  thirdControl: FormGroup;
  fourthControl: FormGroup;

  firstCompleted: boolean = true;
  secondCompleted: boolean = false;
  thirdCompleted: boolean = false;
  fourthCompleted: boolean = false;

  done: string = 'number';

  member: Member;
  s1: Prodi;
  s2: Prodi;
  pspa: Prodi;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private adminVerifyService: AdminVerifyService,
    private _FileSaverService: FileSaverService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new SetLoadingState(true));
    this.adminVerifyService.getDetailMember('none').subscribe(
      (response) => {
        this.store.dispatch(new SetLoadingState(false));
        this.member = response.member;
        this.s1 = this.member.prodis.filter((prodi) => prodi.prodiType === 's1')[0];
        this.s2 = this.member.prodis.filter((prodi) => prodi.prodiType === 's2')[0];
        this.pspa = this.member.prodis.filter((prodi) => prodi.prodiType === 'pspa')[0];
      },
      (err) => {
        this.store.dispatch(new SetLoadingState(false));
      }
    );

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
    this.store.select(UserState).subscribe((state: UserStateModel) => {
      const status: number = state.member?.registerLastStatus;
      switch (status) {
        case 0:
          this.stepper.selectedIndex = 0;
          break;
        case 1:
          this.stepper.selectedIndex = 1;
          this.firstCompleted = true;
          break;

        case 2:
          this.stepper.selectedIndex = 2;
          this.firstCompleted = true;
          this.secondCompleted = true;
          break;
        case 3:
          this.stepper.selectedIndex = 3;
          this.firstCompleted = true;
          this.secondCompleted = true;
          this.thirdCompleted = true;
          this.fourthCompleted = true;
          this.done = 'done';
          break;

        default:
          break;
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
