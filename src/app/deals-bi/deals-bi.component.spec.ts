import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsBiComponent } from './deals-bi.component';

describe('DealsBiComponent', () => {
  let component: DealsBiComponent;
  let fixture: ComponentFixture<DealsBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsBiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
