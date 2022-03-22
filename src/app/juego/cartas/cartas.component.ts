import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/model/Carta';
import { Ranking } from 'src/app/model/Ranking';
import { RankingService } from 'src/app/Service/RankingService';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html'
})
export class CartasComponent implements OnInit {

  constructor(private rankinService: RankingService) { }

  ngOnInit(): void {
    this.setupCartas();
  }

  // Timer
  timeLeft: number = 60;
  interval: any;
  // listado cartas
  imagenesCartas = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg',
    'assets/img/img3.jpg',
    'assets/img/img4.jpg',
    'assets/img/img5.jpg',
    'assets/img/img6.jpg'
  ];
// Arreglos de cartas y cartas giradas
cartas: Carta[] = [];
flippedCards: Carta[] = [];
matchedCount: number = 0;
isInitGame: boolean=false;
isTimeOut: boolean=false;
isWin: boolean=false;
ranking: Ranking= new Ranking();

startTimer() {
  this.restart();
  this.isInitGame=true;
  this.isTimeOut=false;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
        this.isTimeOut=true;
        clearInterval(this.interval);
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
// setea juego
setupCartas(): void {
  this.cartas = [];
  this.imagenesCartas.forEach((image) => {
    const cardData: Carta = {
      imageId: image,
      state: 'default'
    };

    this.cartas.push({ ...cardData });
    this.cartas.push({ ...cardData });

  });
//Baraja cartas
  this.cartas = this.shuffleArray(this.cartas);
}

shuffleArray(anArray: any[]): any[] {
  return anArray.map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
}

cardClicked(index: number): void {
  const cardInfo = this.cartas[index];

  if (cardInfo.state === 'default' && this.flippedCards.length < 2)      
  {
    cardInfo.state = 'flipped';
    this.flippedCards.push(cardInfo);

    if (this.flippedCards.length === 2) {
      this.checkForCardMatch();
   }

  } else if (cardInfo.state === 'flipped') {
    cardInfo.state = 'default';
    this.flippedCards.pop();

  }
}

checkForCardMatch(): void {
  setTimeout(() => {
    const cardOne = this.flippedCards[0];
    const cardTwo = this.flippedCards[1];
    const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
    cardOne.state = cardTwo.state = nextState;

    this.flippedCards = [];

    if (nextState === 'matched') {
      this.matchedCount++;

      if (this.matchedCount === this.imagenesCartas.length) {
        this.isInitGame=false;
        this.isTimeOut=false;
        this.ranking.points=this.timeLeft+" segundos";
        this.timeLeft = 60;
        this.isWin=true;
        
      }
    }

  }, 1000);
}

restart(): void {
  this.matchedCount = 0;
  this.setupCartas();
}

guardar(){
  this.rankinService.setRanking(this.ranking);
  this.isWin=false;
}

}
