import { Component, viewChild } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart, PieChart]);

@Component({
  selector: 'app-dynamic-component',
  standalone: true, 
  imports: [NgxEchartsModule, HttpClientModule, CommonModule],
  providers: [ServiceService, provideEchartsCore({ echarts })],
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css'] 
})
export class DynamicComponentComponent {
  constructor(private service: ServiceService) { }
 
 
  lineChart!: echarts.EChartsCoreOption;
  barChart!: echarts.EChartsCoreOption;
/*   pieChart!: echarts.EChartsCoreOption; */
  result: any;
  temp:any; 
  minTemp: any;
  city: any;
  ngOnInit() {
    this.service.getData().subscribe((res: any) => {
      this.result = res;
      console.log(this.result);
      this.city = res.map((item: any) => item.city);
      this.temp = res.map((item: any) => item.maxTemperature);
      this.minTemp = res.map((item: any) => item.minTemperature);
      console.log(this.city);
      
      console.log(this.minTemp);
      console.log(this.temp);

      this.lineOption();
      this.barOption();
 /*      this.pieOption(); */
    });

  }
  lineOption(){
    this.lineChart = {
      xAxis :{
        type: 'category',
        data: this.city,
    
      },
      yAxis:{
        type: 'value',
   
      },
      series:[
       {
        data: this.temp,
        type: 'line',
       
       }
      ]
    }
  }

  barOption(){
    this.barChart = {
      xAxis :{
        type: 'category',
        data: this.city,
    
      },
      yAxis:{
        type: 'value',
   
      },
      series:[
       {
        data: this.minTemp,
        type: 'bar',
       
       }
      ]
    }
  }

/*   pieOption(){
    this.pieChart = {
      xAxis :{
        type: 'category',
        data: this.result,
    
      },
      yAxis:{
        type: 'value',
   
      },
      series:[
       {
        data: this.minTemp,
        type: 'pie',
       
       }
      ]
    }
  } */
}
