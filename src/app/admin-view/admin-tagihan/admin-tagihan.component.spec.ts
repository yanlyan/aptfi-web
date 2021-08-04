import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTagihanComponent } from './admin-tagihan.component';

describe('AdminTagihanComponent', () => {
  let component: AdminTagihanComponent;
  let fixture: ComponentFixture<AdminTagihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTagihanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTagihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
