import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsAndImageComponentComponent } from './two-columns-and-image.component';

describe('TwoColumnsAndImageComponentComponent', () => {
  let component: TwoColumnsAndImageComponentComponent;
  let fixture: ComponentFixture<TwoColumnsAndImageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnsAndImageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnsAndImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
