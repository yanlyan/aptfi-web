import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapTagihanComponent } from './rekap-tagihan.component';

describe('RekapTagihanComponent', () => {
  let component: RekapTagihanComponent;
  let fixture: ComponentFixture<RekapTagihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekapTagihanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapTagihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
