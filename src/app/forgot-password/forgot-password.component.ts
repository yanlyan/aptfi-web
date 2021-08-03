import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyErrorStateMatcher } from '../core/error-state.matcher';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  loading: boolean = false;
  constructor(private forgotPasswordService:ForgotPasswordService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {

    this.forgotForm = new FormGroup({
      "email": new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    if(this.forgotForm.valid){
      this.loading = true;
      this.forgotPasswordService.sendLinkResetPassword(this.forgotForm.value.email).subscribe(response => {
        this.snackbar.open("Cek Email anda untuk melalukan penggantian Password", "Tutup", {
          duration: 5000,
          panelClass: ["snackbar-succes"]
        })
        this.loading = false;
      }, err => {
        this.loading = false
      })
    }
  }

}
