import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroComponentComponent } from './outro.component';

describe('OutroComponentComponent', () => {
  let component: OutroComponentComponent;
  let fixture: ComponentFixture<OutroComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutroComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
