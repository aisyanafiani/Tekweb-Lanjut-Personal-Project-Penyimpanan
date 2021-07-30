import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmvistugasdetailComponent } from './prmvistugasdetail.component';

describe('PrmvistugasdetailComponent', () => {
  let component: PrmvistugasdetailComponent;
  let fixture: ComponentFixture<PrmvistugasdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmvistugasdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmvistugasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
