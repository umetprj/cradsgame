import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/model/Ranking';
import { RankingService } from 'src/app/Service/RankingService';

@Component({
  selector: 'app-top-ranking',
  templateUrl: './top-ranking.component.html'
})
export class TopRankingComponent implements OnInit {

  ranking: Ranking[] = [];
  constructor(private rankinService: RankingService) { }

  ngOnInit() {
    //this.rankinService.getRankingSmall().then(data => (this.ranking = data));
    return this.rankinService.getRankingSmall().snapshotChanges().subscribe(item => {
      this.ranking = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        //x["$key"] = element.key;
        this.ranking.push(x as Ranking);
      });
    });
  }

   action(){}
}
