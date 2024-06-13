import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskModalComponentComponent } from './create-task-modal-component.component';

describe('CreateTaskModalComponentComponent', () => {
  let component: CreateTaskModalComponentComponent;
  let fixture: ComponentFixture<CreateTaskModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTaskModalComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTaskModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
