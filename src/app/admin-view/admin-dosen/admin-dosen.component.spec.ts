import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDosenComponent } from './admin-dosen.component';

describe('AdminDosenComponent', () => {
  let component: AdminDosenComponent;
  let fixture: ComponentFixture<AdminDosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDosenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
