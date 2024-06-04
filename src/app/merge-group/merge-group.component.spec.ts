import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeGroupComponent } from './merge-group.component';

describe('MergeGroupComponent', () => {
  let component: MergeGroupComponent;
  let fixture: ComponentFixture<MergeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
