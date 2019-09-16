import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditArticlesComponent } from './admin-edit-articles.component';

describe('AdminEditArticlesComponent', () => {
  let component: AdminEditArticlesComponent;
  let fixture: ComponentFixture<AdminEditArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
