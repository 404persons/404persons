import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonsDialogFormComponent } from './missing-persons-dialog-form.component';

describe('MissingPersonsDialogFormComponent', () => {
  let component: MissingPersonsDialogFormComponent;
  let fixture: ComponentFixture<MissingPersonsDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPersonsDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPersonsDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
