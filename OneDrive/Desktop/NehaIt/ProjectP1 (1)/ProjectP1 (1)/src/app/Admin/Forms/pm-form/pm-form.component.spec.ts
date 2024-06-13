import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmFormComponent } from './pm-form.component';

describe('PmFormComponent', () => {
  let component: PmFormComponent;
  let fixture: ComponentFixture<PmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
