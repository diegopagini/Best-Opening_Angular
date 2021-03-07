import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, NgxChartsModule, BrowserAnimationsModule],
  exports: [ChartComponent],
})
export class ChartModule {}
