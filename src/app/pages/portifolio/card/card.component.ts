import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {
    // recupera os parâmetros das rotas

    //https://localhost:4200/porfolio/{1}    =>  os chamados query params
    this.parametrizador.params.subscribe((res) => {
      console.log(res);
    });
    //https://localhost:4200/porfolio/{1}?{name=evandro&token=123}
    this.parametrizador.firstChild?.params.subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/']);
    // }, 5000);
  }
}
