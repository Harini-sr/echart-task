import { Component } from '@angular/core';


import { NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart, PieChart]);

@Component({
  selector: 'app-select-chart',
  imports: [NgxEchartsModule],
  providers: [  provideEchartsCore({ echarts })],
  templateUrl: './select-chart.component.html',
  styleUrl: './select-chart.component.css'
})
export class SelectChartComponent {

  lineChart: any;

  ngOnInit() {
    this.setChart('line'); 
  }
  
  changeChart(event: any) {
    const type = event.target.value;
    this.setChart(type);
  }
  
  setChart(type: string) {
    if (type === 'pie' || type === 'doughnut') {
      this.lineChart = {
        series: [{
          type: 'pie',
          radius: type === 'doughnut' ? ['40%', '70%'] : '60%',
          data: [
            { value: 120, name: 'Mon' },
            { value: 200, name: 'Tue' },
            { value: 150, name: 'Wed' },
            { value: 80,  name: 'Thu' },
            { value: 70,  name: 'Fri' },
            { value: 110, name: 'Sat' },
            { value: 130, name: 'Sun' }
          ],
        }]
      };
    } else {
      this.lineChart = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: type,
          smooth: type === 'line'
        }]
      };
    }
  }
  
}
