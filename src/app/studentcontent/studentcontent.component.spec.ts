import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcontentComponent } from './studentcontent.component';

describe('StudentcontentComponent', () => {
  let component: StudentcontentComponent;
  let fixture: ComponentFixture<StudentcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
