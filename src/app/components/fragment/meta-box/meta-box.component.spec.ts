import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaBoxComponentComponent } from './meta-box.component';

describe('MetaBoxComponentComponent', () => {
  let component: MetaBoxComponentComponent;
  let fixture: ComponentFixture<MetaBoxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
