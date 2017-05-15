import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndAudioComponentComponent } from './text-and-audio.component';

describe('TextAndAudioComponentComponent', () => {
  let component: TextAndAudioComponentComponent;
  let fixture: ComponentFixture<TextAndAudioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAndAudioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAndAudioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
