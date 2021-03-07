import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/common/card/card.module';
import { ChartModule } from '../../common/chart/chart.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardModule, ChartModule],
  exports: [HomeComponent],
})
export class HomeModule {}
