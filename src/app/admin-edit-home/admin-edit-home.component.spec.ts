import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditHomeComponent } from './admin-edit-home.component';

describe('AdminEditHomeComponent', () => {
  let component: AdminEditHomeComponent;
  let fixture: ComponentFixture<AdminEditHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
