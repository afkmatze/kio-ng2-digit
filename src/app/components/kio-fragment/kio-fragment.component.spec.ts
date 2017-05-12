import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioFragmentComponent } from './kio-fragment.component';

describe('KioFragmentComponent', () => {
  let component: KioFragmentComponent;
  let fixture: ComponentFixture<KioFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
