import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRankingComponent } from './ranking/top-ranking/top-ranking.component';
import { CartasComponent } from './juego/cartas/cartas.component';

const routes : Routes =[
    {
        path: '',
        component: TopRankingComponent,
        pathMatch: 'full'
    },
    {
        path: 'jugar',
        component: CartasComponent
    },
    {
        path: '**',
        redirectTo:''
    }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}