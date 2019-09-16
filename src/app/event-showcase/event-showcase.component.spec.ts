import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventShowcaseComponent } from './event-showcase.component';

describe('EventShowcaseComponent', () => {
  let component: EventShowcaseComponent;
  let fixture: ComponentFixture<EventShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
