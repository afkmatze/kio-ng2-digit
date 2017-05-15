import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintComponentComponent } from './hint.component';

describe('HintComponentComponent', () => {
  let component: HintComponentComponent;
  let fixture: ComponentFixture<HintComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
