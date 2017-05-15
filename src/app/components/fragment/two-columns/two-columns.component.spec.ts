import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsComponentComponent } from './two-columns.component';

describe('TwoColumnsComponentComponent', () => {
  let component: TwoColumnsComponentComponent;
  let fixture: ComponentFixture<TwoColumnsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
