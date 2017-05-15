import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnComponentComponent } from './single-column.component';

describe('SingleColumnComponentComponent', () => {
  let component: SingleColumnComponentComponent;
  let fixture: ComponentFixture<SingleColumnComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleColumnComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
