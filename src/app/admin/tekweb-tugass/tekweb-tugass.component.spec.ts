import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekwebTugassComponent } from './tekweb-tugass.component';

describe('TekwebTugassComponent', () => {
  let component: TekwebTugassComponent;
  let fixture: ComponentFixture<TekwebTugassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekwebTugassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekwebTugassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
