import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayerComponentComponent } from './audio-player.component';

describe('AudioPlayerComponentComponent', () => {
  let component: AudioPlayerComponentComponent;
  let fixture: ComponentFixture<AudioPlayerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioPlayerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
