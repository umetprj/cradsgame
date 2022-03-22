import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from '../../model/Carta';

@Component({
  selector: 'app-animacion-carta',
  templateUrl: './animacion-carta.component.html',
  styleUrls: ['./animacion-carta.component.scss'], 
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      state('matched', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class AnimacionCartaComponent implements OnInit {

  @Input() data!: Carta;

  @Output() cardClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
