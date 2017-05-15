import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BGRChapter6ComponentComponent } from './bgr-chapter6.component';

describe('BGRChapter6ComponentComponent', () => {
  let component: BGRChapter6ComponentComponent;
  let fixture: ComponentFixture<BGRChapter6ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BGRChapter6ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BGRChapter6ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
