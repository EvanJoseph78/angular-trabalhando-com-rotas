import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private parametrizador: ActivatedRoute) {
    // recupera os parâmetros das rotas

    //https://localhost:4200/porfolio/{1}    =>  os chamados query params
    this.parametrizador.params.subscribe((res) => {
      console.log(res);
    });
    //https://localhost:4200/porfolio/{1}?{name=evandro&token=123}
    this.parametrizador.queryParams.subscribe((res) => {
      console.log(res);
    });
  }
}
