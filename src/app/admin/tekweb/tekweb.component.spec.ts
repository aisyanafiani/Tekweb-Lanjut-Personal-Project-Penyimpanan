import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekwebComponent } from './tekweb.component';

describe('TekwebComponent', () => {
  let component: TekwebComponent;
  let fixture: ComponentFixture<TekwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
