import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekwebtugasdetailComponent } from './tekwebtugasdetail.component';

describe('TekwebtugasdetailComponent', () => {
  let component: TekwebtugasdetailComponent;
  let fixture: ComponentFixture<TekwebtugasdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekwebtugasdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekwebtugasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
