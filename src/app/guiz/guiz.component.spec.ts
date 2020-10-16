import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuizComponent } from './guiz.component';

describe('GuizComponent', () => {
  let component: GuizComponent;
  let fixture: ComponentFixture<GuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
