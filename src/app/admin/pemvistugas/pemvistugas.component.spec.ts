import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemvistugasComponent } from './pemvistugas.component';

describe('PemvistugasComponent', () => {
  let component: PemvistugasComponent;
  let fixture: ComponentFixture<PemvistugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemvistugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemvistugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
