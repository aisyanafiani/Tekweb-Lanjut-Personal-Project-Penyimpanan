import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekuritasdetailComponent } from './sekuritasdetail.component';

describe('SekuritasdetailComponent', () => {
  let component: SekuritasdetailComponent;
  let fixture: ComponentFixture<SekuritasdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekuritasdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SekuritasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
