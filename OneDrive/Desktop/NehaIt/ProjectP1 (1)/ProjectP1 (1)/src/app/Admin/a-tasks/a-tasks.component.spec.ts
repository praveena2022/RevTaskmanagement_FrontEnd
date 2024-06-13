import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATasksComponent } from './a-tasks.component';

describe('ATasksComponent', () => {
  let component: ATasksComponent;
  let fixture: ComponentFixture<ATasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ATasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ATasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
