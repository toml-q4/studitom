import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsHeaderComponent } from './workflows-header.component';

describe('WorkflowsHeaderComponent', () => {
  let component: WorkflowsHeaderComponent;
  let fixture: ComponentFixture<WorkflowsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
