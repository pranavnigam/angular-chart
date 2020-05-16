import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonChartComponent } from './common-chart/common-chart.component';


const routes: Routes = [
  { path: '', component: CommonChartComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
