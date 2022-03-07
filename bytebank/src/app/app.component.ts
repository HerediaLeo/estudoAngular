import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: any = {}; // recebendo um objeto transferencia que pode conter qualquer tipagem

  transferir($event){
      this.transferencia = $event;
  }

}
