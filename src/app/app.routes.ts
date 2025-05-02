import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StaticComponent } from './component/static/static.component';
import { DynamicComponentComponent } from './component/dynamic-component/dynamic-component.component';
import { SelectChartComponent } from './component/select-chart/select-chart.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"static",
        component: StaticComponent
    },
    {
        path:"dynamic",
        component: DynamicComponentComponent
    },
    {
        path:"select",
        component: SelectChartComponent
    },
];
