import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomestudentComponent } from './welcomestudent.component';

describe('WelcomestudentComponent', () => {
  let component: WelcomestudentComponent;
  let fixture: ComponentFixture<WelcomestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomestudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
