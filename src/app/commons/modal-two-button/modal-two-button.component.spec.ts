import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTwoButtonComponent } from './modal-two-button.component';

describe('ModalTwoButtonComponent', () => {
  let component: ModalTwoButtonComponent;
  let fixture: ComponentFixture<ModalTwoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTwoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTwoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
