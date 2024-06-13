import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTasksComponent } from './t-tasks.component';

describe('TTasksComponent', () => {
  let component: TTasksComponent;
  let fixture: ComponentFixture<TTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
