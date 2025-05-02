import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChartComponent } from './select-chart.component';

describe('SelectChartComponent', () => {
  let component: SelectChartComponent;
  let fixture: ComponentFixture<SelectChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
