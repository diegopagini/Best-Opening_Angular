import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  results: any[] = [
    {
      name: 'Pokemon',
      value: 1,
    },
    {
      name: 'Dragon Ball',
      value: 1,
    },
    {
      name: 'Ranma 1/2',
      value: 1,
    },
    {
      name: 'Sailor Moon',
      value: 1,
    },
    {
      name: 'Inuyasha',
      value: 1,
    },
    {
      name: 'Caballeros del Zodiaco',
      value: 1,
    },
    {
      name: 'Slam Dunk',
      value: 1,
    },
    {
      name: 'Dragon Ball Z',
      value: 1,
    },
    {
      name: 'Bt X',
      value: 1,
    },
    {
      name: 'El Baron Rojo',
      value: 1,
    },
    {
      name: 'Dragon Ball Gt',
      value: 1,
    },
    {
      name: 'Neon Genesis Evangelion',
      value: 1,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Openings';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'natural';

  constructor() {}

  onSelect(event) {
    console.log(event);
  }
}
