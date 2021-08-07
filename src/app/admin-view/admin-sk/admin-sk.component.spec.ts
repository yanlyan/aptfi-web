import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSkComponent } from './admin-sk.component';

describe('AdminSkComponent', () => {
  let component: AdminSkComponent;
  let fixture: ComponentFixture<AdminSkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
