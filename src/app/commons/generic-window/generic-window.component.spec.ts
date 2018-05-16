import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericWindowComponent } from './generic-window.component';

describe('GenericWindowComponent', () => {
  let component: GenericWindowComponent;
  let fixture: ComponentFixture<GenericWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
