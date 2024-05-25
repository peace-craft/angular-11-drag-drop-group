import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropAreaComponent } from './drag-drop-area.component';

describe('DragDropAreaComponent', () => {
  let component: DragDropAreaComponent;
  let fixture: ComponentFixture<DragDropAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
