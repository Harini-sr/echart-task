import { Component } from '@angular/core';

/* echart */
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart, PieChart,]);


import { EChartsCoreOption } from 'echarts/core';

@Component({
  selector: 'app-static',
  imports: [NgxEchartsModule],
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css'],
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class StaticComponent {
  lineChart:any;
  barChart:any;
  pieChart:any;
  Doughnut :any
ngOnInit() {

  /* 1 line chart */
  this.lineChart  = {
    xAxis:{
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis:{
      type: 'value',
    },
    series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'line',
      smooth: true,
    }
    ]
  }

/* 2 bar chart */
  
this.barChart  = {
  xAxis:{
    type: 'category',
    data: [2000, 2010, 2020, 2035, 2040, 2050, 2060]
  },
  yAxis:{
    type: 'value',
  },
  series: [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    
  }
  ]
}



/* 3 pie chart */

this.pieChart  = {
  xAxis:{
    type: 'category',
    data: [2000, 2010, 2020, 2035, 2040, 2050, 2060]
  },
  yAxis:{
    type: 'value',
  },
  series: [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'pie',
    
  }
  ]
}


/* 4. Doughnut chart */

this.Doughnut = {
  xAxis: {
    type: 'category',
    data: [2000, 2010, 2020, 2035, 2040, 2050, 2060]
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Population',
      type: 'pie',
      radius: ['40%', '70%'],  // This creates the "doughnut" effect
      data: [
        { value: 120, name: '2000' },
        { value: 200, name: '2010' },
        { value: 150, name: '2020' },
        { value: 80, name: '2035' },
        { value: 70, name: '2040' },
        { value: 110, name: '2050' },
        { value: 130, name: '2060' }
      ],
      label: {
        show: true,
        position: 'outside'
      }
    }
  ]
};
}
}
