import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemvistugassComponent } from './pemvistugass.component';

describe('PemvistugassComponent', () => {
  let component: PemvistugassComponent;
  let fixture: ComponentFixture<PemvistugassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemvistugassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemvistugassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
