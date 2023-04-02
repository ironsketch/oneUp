import { Component } from '@angular/core';
import { Deck } from '../gameParts/Deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
    deck = new Deck();

    constructor() {
        
    }

    ngOnInit(): void {
        
    }
}
