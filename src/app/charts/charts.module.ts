import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { CommonChartComponent } from './common-chart/common-chart.component';


@NgModule({
  declarations: [CommonChartComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
