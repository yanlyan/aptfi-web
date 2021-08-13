import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MustMatch } from 'src/app/core/must-match.validator';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { AdminUserService } from '../admin-user.service';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.scss'],
})
export class AdminUserAddComponent implements OnInit {
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
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        roleId: ['', [Validators.required]],
        passwordConfirmation: ['', [Validators.required]],
      },
      {
        validators: MustMatch('password', 'passwordConfirmation'),
      }
    );
  }

  getRoles() {
    return this.adminUserService.getRoles().pipe(
      map((response) => {
        this.roles = response.roles.filter((r: any) => r.id !== 2);
      })
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.adminUserService.create(this.form.value).subscribe(
        () => {
          this.snackbar.open('Tambah Data user berhasil', '', {
            duration: 5000,
            panelClass: 'snackbar-success',
          });
          this.loading = false;
          this.back();
        },
        (_) => {
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
