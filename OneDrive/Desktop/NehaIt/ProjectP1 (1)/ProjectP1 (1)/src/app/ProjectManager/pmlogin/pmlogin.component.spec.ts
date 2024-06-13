import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmloginComponent } from './pmlogin.component';

describe('PmloginComponent', () => {
  let component: PmloginComponent;
  let fixture: ComponentFixture<PmloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
