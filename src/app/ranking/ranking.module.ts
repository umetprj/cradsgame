import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TopRankingComponent } from './top-ranking/top-ranking.component';

import {TableModule} from 'primeng/table';
import { RankingService } from '../Service/RankingService';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    TopRankingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
		ButtonModule,
    ToolbarModule
  ],
  exports:[TopRankingComponent,
    TableModule],
  providers: [RankingService]
})
export class RankingModule { }
