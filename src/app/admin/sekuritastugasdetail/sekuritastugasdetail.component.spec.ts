import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekuritastugasdetailComponent } from './sekuritastugasdetail.component';

describe('SekuritastugasdetailComponent', () => {
  let component: SekuritastugasdetailComponent;
  let fixture: ComponentFixture<SekuritastugasdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekuritastugasdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SekuritastugasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
