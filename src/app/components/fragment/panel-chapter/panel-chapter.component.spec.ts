import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelChapterComponentComponent } from './panel-chapter.component';

describe('PanelChapterComponentComponent', () => {
  let component: PanelChapterComponentComponent;
  let fixture: ComponentFixture<PanelChapterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelChapterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelChapterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
