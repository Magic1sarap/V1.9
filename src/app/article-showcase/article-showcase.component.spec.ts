import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleShowcaseComponent } from './article-showcase.component';

describe('ArticleShowcaseComponent', () => {
  let component: ArticleShowcaseComponent;
  let fixture: ComponentFixture<ArticleShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
