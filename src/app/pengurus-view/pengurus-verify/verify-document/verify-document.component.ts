import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { Member } from 'src/app/models/member.model';
import { Prodi } from 'src/app/models/prodi.model';
import { SetLoadingState } from '../../../states/loading.state';
import { PengurusVerifyService } from '../pengurus-verify.service';

@Component({
  selector: 'app-verify-document',
  templateUrl: './verify-document.component.html',
  styleUrls: ['./verify-document.component.scss'],
})
export class VerifyDocumentComponent implements OnInit {
  member: Member;
  s1: Prodi;
  s2: Prodi;
  pspa: Prodi;
  constructor(
    private pengurusVerifyService: PengurusVerifyService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private _FileSaverService: FileSaverService,
    private snackbar: MatSnackBar
  ) {
    this.store.dispatch(new SetLoadingState(true));
  }

  ngOnInit(): void {
    this.pengurusVerifyService.getDetailMember(this.route.snapshot.params.uuid).subscribe((response) => {
      this.store.dispatch(new SetLoadingState(false));
      this.member = response.member;
      this.s1 = this.member.prodis.filter((prodi) => prodi.prodiType === 's1')[0];
      this.s2 = this.member.prodis.filter((prodi) => prodi.prodiType === 's2')[0];
      this.pspa = this.member.prodis.filter((prodi) => prodi.prodiType === 'pspa')[0];
    });
  }

  download(column: string) {
    this.store.dispatch(new SetLoadingState(true));
    this.pengurusVerifyService.downloadFile(this.member.uuid, column).subscribe(
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

  onVerifyClick() {
    this.store.dispatch(new SetLoadingState(true));
    this.pengurusVerifyService.verifyMember(this.member.uuid).subscribe(
      () => {
        this.store.dispatch(new SetLoadingState(false));
        this.router.navigate(['pengurus/verify'], {
          queryParams: this.route.snapshot.queryParams,
        });
        this.snackbar.open('Verifikasi Berhasil', '', {
          panelClass: ['snackbar-success'],
          duration: 2000,
        });
      },
      (err) => {
        this.store.dispatch(new SetLoadingState(false));
        this.snackbar.open('Verifikasi Gagal', '', {
          panelClass: ['snackbar-warn'],
          duration: 2000,
        });
      }
    );
  }

  back() {
    this.router.navigate(['pengurus/verify'], {
      queryParams: this.route.snapshot.queryParams,
    });
  }
}
