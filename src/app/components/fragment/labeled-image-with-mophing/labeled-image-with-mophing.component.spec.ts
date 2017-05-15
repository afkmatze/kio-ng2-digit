import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledImageWithMophingComponentComponent } from './labeled-image-with-mophing.component';

describe('LabeledImageWithMophingComponentComponent', () => {
  let component: LabeledImageWithMophingComponentComponent;
  let fixture: ComponentFixture<LabeledImageWithMophingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledImageWithMophingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledImageWithMophingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
