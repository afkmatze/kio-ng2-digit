import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksComponentComponent } from './social-links.component';

describe('SocialLinksComponentComponent', () => {
  let component: SocialLinksComponentComponent;
  let fixture: ComponentFixture<SocialLinksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
