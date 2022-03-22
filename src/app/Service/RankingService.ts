import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Ranking } from "../model/Ranking";

@Injectable()
export class RankingService {

    rankingList: AngularFireList<any>;
    constructor(private http: HttpClient, private firebase: AngularFireDatabase) {
        this.rankingList=this.firebase.list('rankings');
     }
    
    getRankingSmall() {
        return this.rankingList=this.firebase.list('rankings');
        /*return this.http.get<any>('../assets/ranking-small.json')
        .toPromise()
        .then(res => <Ranking[]>res.data)
        .then(data => { return data; });*/
    }

    setRanking(ranking:Ranking){
        this.rankingList.push({
            nombre:ranking.nombre,
            points:ranking.points
        });
    }
}