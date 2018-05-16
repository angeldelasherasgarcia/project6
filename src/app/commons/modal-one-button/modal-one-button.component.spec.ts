import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOneButtonComponent } from './modal-one-button.component';

describe('ModalOneButtonComponent', () => {
  let component: ModalOneButtonComponent;
  let fixture: ComponentFixture<ModalOneButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOneButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
