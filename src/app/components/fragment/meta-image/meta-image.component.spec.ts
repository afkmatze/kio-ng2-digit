import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaImageComponentComponent } from './meta-image.component';

describe('MetaImageComponentComponent', () => {
  let component: MetaImageComponentComponent;
  let fixture: ComponentFixture<MetaImageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaImageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
