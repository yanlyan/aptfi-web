import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { setValue } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { Observable } from 'rxjs';
import { debounceTime, filter, finalize, map, mergeMap, startWith, tap } from 'rxjs/operators';
import { Member, Prodi } from 'src/app/user-view/user.model';
import { AdminSKService } from './admin-sk.service';

@Component({
  selector: 'app-admin-sk',
  templateUrl: './admin-sk.component.html',
  styleUrls: ['./admin-sk.component.scss'],
})
export class AdminSkComponent implements OnInit {
  searchForm: FormGroup;
  filteredOptions: Observable<Member[]>;
  member: Member;
  s1: Prodi;
  searchLoading: boolean = false;
  skLoading: boolean = false;
  constructor(
    private skService: AdminSKService,
    private route: ActivatedRoute,
    private _FileSaverService: FileSaverService
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(null, [Validators.required]),
    });
    this.route.queryParams.subscribe((params) => {
      if (params.member) {
        this.skService.getMember(params.member).subscribe((response) => {
          this.member = response.member;
          this.s1 = this.member.prodis.filter((p) => p.prodiType === 's1')[0];
          this.searchForm.controls['search'].setValue(this.member);
        });
      }
    });
    this.filteredOptions = this.searchForm.controls['search'].valueChanges.pipe(
      tap(() => console.log),
      startWith(''),
      debounceTime(200),
      filter((values) => values.length >= 4),
      tap((val) => (this.searchLoading = true)),
      mergeMap((value) => {
        return this.skService.search(value);
      }),
      map((values) => {
        return values.filter((v) => v.registerPaid && v.annualPaid);
      }),
      tap(() => {
        this.searchLoading = false;
      })
    );
  }

  displayFn(user: Member): string {
    return user && user.universityName ? user.universityName : '';
  }
  onSelect(event: any) {
    this.member = event.option.value;
    this.s1 = this.member.prodis.filter((p) => p.prodiType === 's1')[0];
  }

  downloadSK() {
    this.skLoading = true;
    this.skService.downloadSK(this.member.uuid).subscribe(
      (response) => {
        this._FileSaverService.save(
          response,
          `SK Anggota APTFI ${this.member.universityName} ${this.member.skString} .pdf`,
          'pdf'
        );
        this.skLoading = false;
      },
      (err) => {
        this.skLoading = false;
      }
    );
  }

  generateSK() {
    this.skLoading = true;
    this.skService
      .generateSK(this.member.uuid)
      .pipe(finalize(() => (this.skLoading = false)))
      .subscribe((response) => {
        this.member = response.member;
      });
  }
}
