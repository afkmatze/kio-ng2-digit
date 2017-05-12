import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioNodeComponent } from './kio-node.component';

describe('KioNodeComponent', () => {
  let component: KioNodeComponent;
  let fixture: ComponentFixture<KioNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
