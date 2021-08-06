import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Store } from '@ngxs/store';
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

  constructor(private _formBuilder: FormBuilder, private store: Store) {}

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
}
