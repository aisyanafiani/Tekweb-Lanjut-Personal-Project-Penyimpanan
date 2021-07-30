import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekuritastugassComponent } from './sekuritastugass.component';

describe('SekuritastugassComponent', () => {
  let component: SekuritastugassComponent;
  let fixture: ComponentFixture<SekuritastugassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekuritastugassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SekuritastugassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
