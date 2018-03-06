import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsUpdateComponent } from './workflows-update.component';

describe('WorkflowsUpdateComponent', () => {
  let component: WorkflowsUpdateComponent;
  let fixture: ComponentFixture<WorkflowsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
