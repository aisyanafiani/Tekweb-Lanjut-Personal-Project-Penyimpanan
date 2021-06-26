import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekuritaskomputerComponent } from './sekuritaskomputer.component';

describe('SekuritaskomputerComponent', () => {
  let component: SekuritaskomputerComponent;
  let fixture: ComponentFixture<SekuritaskomputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekuritaskomputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SekuritaskomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
