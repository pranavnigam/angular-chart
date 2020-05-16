import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/socket.service';
@Component({
  selector: 'app-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.css']
})
export class CommonChartComponent implements OnInit {

  chart;
  constructor(private srv : SocketService) { }

  ngOnInit(): void {

    this.srv.listen('dataupdate').subscribe((res: any) => {
      console.log(res);
      this.chart.data.datasets[0].data = res;
      this.chart.update();
    })

    this.chart = new Chart('canvas', {
      type: 'bar',
      options: {
        responsive: true,
        text: 'Realtime Registered Corona Cases'
      },
      data: {
        labels: ['Andhra Pradesh', 'Delhi', 'Madhya Pradesh', 'Himachal Pradesh', 'Haryana', 'Maharastra', 'Rajasthan', 'Uttar Pradesh'],
        datasets: [
          {
            type: 'bar',
            label: 'Test Chart',
            // data: [10, 3, 6, 11, 38, 5, 6, 17],
            backgroundColor: '#3f3fbf',
            fill: false
          }
        ]
      }
    })
  }

}
