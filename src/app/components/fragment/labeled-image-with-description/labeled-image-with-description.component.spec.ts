import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledImageWithDescriptionComponentComponent } from './labeled-image-with-description.component';

describe('LabeledImageWithDescriptionComponentComponent', () => {
  let component: LabeledImageWithDescriptionComponentComponent;
  let fixture: ComponentFixture<LabeledImageWithDescriptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledImageWithDescriptionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledImageWithDescriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
