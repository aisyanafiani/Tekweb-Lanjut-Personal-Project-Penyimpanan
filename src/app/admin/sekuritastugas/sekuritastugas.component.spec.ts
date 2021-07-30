import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekuritastugasComponent } from './sekuritastugas.component';

describe('SekuritastugasComponent', () => {
  let component: SekuritastugasComponent;
  let fixture: ComponentFixture<SekuritastugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekuritastugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SekuritastugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
