import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MustMatch } from 'src/app/core/must-match.validator';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { AdminUserService } from '../admin-user.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.scss'],
})
export class AdminUserEditComponent implements OnInit {
  roles: Role[];
  form: FormGroup;
  user: User;
  loading: boolean = false;
  params: any;
  constructor(
    private adminUserService: AdminUserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.getRoles().subscribe();
    this.initForm();
    this.getUser().subscribe(() => {
      this.fillForm();
    });
  }

  ngOnInit(): void {
    this.params = this.route.snapshot.queryParams;
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null),
      role: new FormControl(null, [Validators.required]),
    });

    this.form = this.fb.group(
      {
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', []],
        roleId: ['', [Validators.required]],
        passwordConfirmation: ['', []],
      },
      {
        validators: MustMatch('password', 'passwordConfirmation'),
      }
    );
  }

  fillForm() {
    this.form.controls['id'].setValue(this.user.id);
    this.form.controls['name'].setValue(this.user.name);
    this.form.controls['email'].setValue(this.user.email);
    this.form.controls['roleId'].setValue(this.user.role.id);
  }

  getUser() {
    const id = this.route.snapshot.params.id;
    return this.adminUserService.getUser(id).pipe(
      map((response) => {
        this.user = response.user;
      })
    );
  }

  getRoles() {
    return this.adminUserService.getRoles().pipe(
      map((response) => {
        this.roles = response.roles;
      })
    );
  }
  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.adminUserService.update(this.form.value).subscribe(
        () => {
          this.snackbar.open('Ubah Data user berhasil', '', {
            duration: 5000,
            panelClass: 'snackbar-success',
          });
          this.loading = false;
          this.back();
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }
  back() {
    this.router.navigate(['admin/users'], {
      queryParams: this.params,
    });
  }
}
