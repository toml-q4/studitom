import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWorkflowComponent } from './grid-workflow.component';

describe('GridWorkflowComponent', () => {
  let component: GridWorkflowComponent;
  let fixture: ComponentFixture<GridWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
