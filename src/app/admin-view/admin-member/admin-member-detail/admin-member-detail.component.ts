import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { Dosen, Member, Prodi } from 'src/app/user-view/user.model';
import { SetLoadingState } from '../../admin-loading.state';
import { AdminVerifyService } from '../../admin-verify/admin-verify.service';
import { AdminMemberService } from '../admin-member.service';

@Component({
  selector: 'app-admin-member-detail',
  templateUrl: './admin-member-detail.component.html',
  styleUrls: ['./admin-member-detail.component.scss'],
})
export class AdminMemberDetailComponent implements OnInit {
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

  queryParams: any;

  constructor(
    private adminVerifyService: AdminVerifyService,
    private _FileSaverService: FileSaverService,
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {
    this.store.dispatch(new SetLoadingState(true));
  }

  ngOnInit(): void {
    this.queryParams = this.route.snapshot.queryParams;
    const uuid = this.route.snapshot.params.uuid;
    this.adminVerifyService.getDetailMember(uuid).subscribe(
      (response) => {
        this.member = response.member;
        this.s1 = this.member.prodis.filter((p) => p.prodiType === 's1')[0];
        this.s2 = this.member.prodis.filter((p) => p.prodiType === 's2')[0];
        this.pspa = this.member.prodis.filter((p) => p.prodiType === 'pspa')[0];
        this.dosenS1 = this.member.dosens.filter((p) => p.dosenType === 's1');
        this.dosenPSPA = this.member.dosens.filter((p) => p.dosenType === 'pspa');
        this.store.dispatch(new SetLoadingState(false));
      },
      (err) => {
        this.store.dispatch(new SetLoadingState(false));
      }
    );
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

  goBack() {
    if (this.queryParams.origin === 'verify') {
      this.router.navigate(['/admin/verify'], {
        queryParams: this.queryParams,
      });
    } else {
      this.router.navigate(['/admin/anggota'], {
        queryParams: this.queryParams,
      });
    }
  }
}
