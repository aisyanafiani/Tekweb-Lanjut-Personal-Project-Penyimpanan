import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekwebdetailComponent } from './tekwebdetail.component';

describe('TekwebdetailComponent', () => {
  let component: TekwebdetailComponent;
  let fixture: ComponentFixture<TekwebdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekwebdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekwebdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
