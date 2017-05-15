import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAGroupComponentComponent } from './nbagroup.component';

describe('NBAGroupComponentComponent', () => {
  let component: NBAGroupComponentComponent;
  let fixture: ComponentFixture<NBAGroupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBAGroupComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBAGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
