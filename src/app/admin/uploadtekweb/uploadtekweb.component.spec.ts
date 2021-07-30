import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtekwebComponent } from './uploadtekweb.component';

describe('UploadtekwebComponent', () => {
  let component: UploadtekwebComponent;
  let fixture: ComponentFixture<UploadtekwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadtekwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadtekwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
