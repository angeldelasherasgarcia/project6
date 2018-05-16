import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDownloadFileComponent } from './modal-download-file.component';

describe('ModalDownloadFileComponent', () => {
  let component: ModalDownloadFileComponent;
  let fixture: ComponentFixture<ModalDownloadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDownloadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDownloadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
