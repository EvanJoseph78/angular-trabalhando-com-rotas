import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private activeRout: ActivatedRoute) { // recupera os parâmetros das rotas
    this.activeRout.params.subscribe();
    (res: any) => console.log(res);
  }
}
