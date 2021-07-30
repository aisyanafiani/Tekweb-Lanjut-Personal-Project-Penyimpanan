import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpemvisComponent } from './uploadpemvis.component';

describe('UploadpemvisComponent', () => {
  let component: UploadpemvisComponent;
  let fixture: ComponentFixture<UploadpemvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadpemvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadpemvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
