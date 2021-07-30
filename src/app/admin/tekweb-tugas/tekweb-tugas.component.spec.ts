import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekwebTugasComponent } from './tekweb-tugas.component';

describe('TekwebTugasComponent', () => {
  let component: TekwebTugasComponent;
  let fixture: ComponentFixture<TekwebTugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekwebTugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekwebTugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
