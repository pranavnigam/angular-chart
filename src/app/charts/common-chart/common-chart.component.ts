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
  chartType: string = 'doughnut';
  constructor(private srv : SocketService) { }

  ngOnInit(): void {

    this.srv.listen('dataupdate').subscribe((res: any) => {
      this.chart.data.datasets[0].data = res;
      this.chart.update();
    })
    this.createChart();
  }
  createChart(){
    this.chart = new Chart('canvas', {
      type: this.chartType,
      options: {
        responsive: true,
        text: 'Realtime Registered Corona Cases'
      },
      data: {
        labels: ['Andhra Pradesh', 'Delhi', 'Madhya Pradesh', 'Himachal Pradesh', 'Haryana', 'Maharastra', 'Rajasthan', 'Uttar Pradesh'],
        datasets: [
          {
            // type: this.chartType,
            label: 'Test Chart',
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 112, 64, 0.2)',
              'rgba(255, 180, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 112, 64, 0.2)',
              'rgba(255, 180, 64, 0.2)'
            ]
          }
        ]
      }
    })
  }
  changeChart(option){
    switch(option){
      case 1:{
        this.chart.destroy();
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
                // type: this.chartType,
                label: 'Test Chart',
                fill: false,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 112, 64, 0.2)',
                  'rgba(255, 180, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 112, 64, 0.2)',
                  'rgba(255, 180, 64, 0.2)'
                ]
              }
            ]
          }
        })
        this.chart.update();
        break;
      }
      case 2:{
        this.chart.destroy();
        this.chart = new Chart('canvas', {
          type: 'pie',
          options: {
            responsive: true,
            text: 'Realtime Registered Corona Cases'
          },
          data: {
            labels: ['Andhra Pradesh', 'Delhi', 'Madhya Pradesh', 'Himachal Pradesh', 'Haryana', 'Maharastra', 'Rajasthan', 'Uttar Pradesh'],
            datasets: [
              {
                // type: this.chartType,
                label: 'Test Chart',
                fill: false,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 112, 64, 0.2)',
                  'rgba(255, 180, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 112, 64, 0.2)',
                  'rgba(255, 180, 64, 0.2)'
                ]
              }
            ]
          }
        })
        this.chart.update();
        break;
      }
      case 3:{
        this.chart.destroy();
        this.chart = new Chart('canvas', {
          type: 'line',
          options: {
            responsive: true,
            text: 'Realtime Registered Corona Cases'
          },
          data: {
            labels: ['Andhra Pradesh', 'Delhi', 'Madhya Pradesh', 'Himachal Pradesh', 'Haryana', 'Maharastra', 'Rajasthan', 'Uttar Pradesh'],
            datasets: [
              {
                // type: this.chartType,
                label: 'Test Chart',
                fill: false,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)',
                  // 'rgba(255, 112, 64, 0.2)',
                  // 'rgba(255, 180, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(220, 53, 69, 1)'
                ],
                borderWidth: 2
              }
            ]
          }
        })
        this.chart.update();
        break;
      }
      case 4:{
        this.chart.destroy();
        this.chart = new Chart('canvas', {
          type: 'doughnut',
          options: {
            responsive: true,
            text: 'Realtime Registered Corona Cases'
          },
          data: {
            labels: ['Andhra Pradesh', 'Delhi', 'Madhya Pradesh', 'Himachal Pradesh', 'Haryana', 'Maharastra', 'Rajasthan', 'Uttar Pradesh'],
            datasets: [
              {
                // type: this.chartType,
                label: 'Test Chart',
                fill: false,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 112, 64, 0.2)',
                  'rgba(255, 180, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 112, 64, 0.2)',
                  'rgba(255, 180, 64, 0.2)'
                ]
              }
            ]
          }
        })
        this.chart.update();
        break;
      }
    }
  }
}
