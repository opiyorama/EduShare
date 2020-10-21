import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerWelcomeComponent } from './learner-welcome.component';

describe('LearnerWelcomeComponent', () => {
  let component: LearnerWelcomeComponent;
  let fixture: ComponentFixture<LearnerWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
