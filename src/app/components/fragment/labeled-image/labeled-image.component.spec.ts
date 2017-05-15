import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledImageComponentComponent } from './labeled-image.component';

describe('LabeledImageComponentComponent', () => {
  let component: LabeledImageComponentComponent;
  let fixture: ComponentFixture<LabeledImageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledImageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
