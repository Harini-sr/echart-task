import { Component } from '@angular/core';

/* echart */
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent,TitleComponent,TooltipComponent,LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart, PieChart,TitleComponent,TooltipComponent,LegendComponent]);


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
  this.lineChart = {
    title: {
      text: 'Temperature Variation for the Last Week',
      subtext: 'Daily Temperature in °C',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      name: 'Temperature (°C)',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: 'Temperature',
        type: 'line',
        data: [30, 32, 29, 28, 27, 35, 31],  
        smooth: true,  
        itemStyle: {
          color: 'red'  
        },
        lineStyle: {
          width: 3, 
        },
        symbolSize: 8,  
        areaStyle: {
          color: 'rgba(231, 76, 60, 0.2)' 
        }
      }
    ]
  };
  
  
/* 2 bar chart */
  
this.barChart = {
  title: {
    text: 'Weather Temperature for the Last Week',
    subtext: 'Daily Temperature',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },

  yAxis: {
    type: 'value',
    name: 'Temperature (°C)',
    axisLabel: {
      formatter: '{value} °C'
    }
  },

  series: [
    {
      name: 'Temperature',
      type: 'bar',
      data: [30, 32, 29, 28, 27, 35, 31], 
      itemStyle: {
        color: '#f39c12' 
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c} °C'
      }
    }
  ]

};




/* 3 pie chart */

this.pieChart = {
  title: {
    text: 'Weather Distribution',
    subtext: 'Last Week',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Weather Conditions',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 2, name: 'Sunny' },  
        { value: 3, name: 'Rainy' },  
        { value: 1, name: 'Cloudy' },
        { value: 1, name: 'Windy' },  
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(184, 26, 26, 0.5)'
        }
      }
    }
  ]
};



/* 4. Doughnut chart */

this.Doughnut = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Colors',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2, name: 'Sunny' },  
        { value: 3, name: 'Rainy' },  
        { value: 1, name: 'Cloudy' },
        { value: 1, name: 'Windy' },  
      ]
    }
  ]
};
}
}
