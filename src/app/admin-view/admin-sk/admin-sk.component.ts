import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { setValue } from '@ngxs/store';
import { Observable } from 'rxjs';
import { debounceTime, filter, finalize, mergeMap, startWith, tap } from 'rxjs/operators';
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
  constructor(private skService: AdminSKService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(null, [Validators.required]),
    });
    this.filteredOptions = this.searchForm.controls['search'].valueChanges.pipe(
      startWith(''),
      tap((val) => (this.searchLoading = false)),
      debounceTime(200),
      filter((values) => values.length >= 4),
      tap((val) => (this.searchLoading = true)),
      mergeMap((value) => {
        return this.skService.search(value);
      })
    );
  }
  displayFn(user: Member): string {
    return user && user.universityName ? user.universityName : '';
  }
  onSelect(event: any) {
    // this.searchForm.controls['search'].setValue(event.option.value.universityName);
    this.member = event.option.value;
    this.s1 = this.member.prodis.filter((p) => p.prodiType === 's1')[0];
  }

  generateSK() {
    this.skLoading = true;
    this.skService
      .generateSK(this.member.uuid)
      .pipe(finalize(() => (this.skLoading = false)))
      .subscribe((response) => {
        console.log(response);
      });
  }
}
