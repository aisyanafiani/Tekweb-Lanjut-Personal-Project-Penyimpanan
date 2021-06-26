import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemvisComponent } from './pemvis.component';

describe('PemvisComponent', () => {
  let component: PemvisComponent;
  let fixture: ComponentFixture<PemvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
