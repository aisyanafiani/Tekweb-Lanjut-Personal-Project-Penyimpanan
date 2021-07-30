import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsekuritasComponent } from './uploadsekuritas.component';

describe('UploadsekuritasComponent', () => {
  let component: UploadsekuritasComponent;
  let fixture: ComponentFixture<UploadsekuritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadsekuritasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsekuritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
