import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPicComponentComponent } from './big-pic.component';

describe('BigPicComponentComponent', () => {
  let component: BigPicComponentComponent;
  let fixture: ComponentFixture<BigPicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigPicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigPicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
