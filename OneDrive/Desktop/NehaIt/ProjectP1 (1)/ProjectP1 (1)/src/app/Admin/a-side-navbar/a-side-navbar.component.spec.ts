import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASideNavbarComponent } from './a-side-navbar.component';

describe('ASideNavbarComponent', () => {
  let component: ASideNavbarComponent;
  let fixture: ComponentFixture<ASideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ASideNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ASideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
