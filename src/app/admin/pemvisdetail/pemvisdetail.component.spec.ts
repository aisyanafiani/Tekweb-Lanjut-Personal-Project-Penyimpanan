import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemvisdetailComponent } from './pemvisdetail.component';

describe('PemvisdetailComponent', () => {
  let component: PemvisdetailComponent;
  let fixture: ComponentFixture<PemvisdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemvisdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemvisdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
