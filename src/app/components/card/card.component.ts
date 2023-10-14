import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameCover:string = ""
  @Input()
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string ="Digital | XPT" 
  @Input()
  gamePrice:string = "R$ 399,99"

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
