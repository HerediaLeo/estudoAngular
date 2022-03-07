import { Component, EventEmitter, Output } from '@angular/core';


// EventEmitter biblioteca para passar os dados

@Component({
    selector: 'app-nova-transferencia', //nome do componente.
    templateUrl: './nova-transferencia.component.html', // aonde esta localicado o template deste componente.
    styleUrls: ['./nova-transferencia.component.scss'] //css aplicado a este componente. Um componente pode ter mais de um arquivo css.
  })


export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>(); //anotação para disparar um evento.
  //Tipagem com ANY,  recurso do Typescript que ao invés de eu dizer que EventEmitter é de um tipo específico, estou dizendo que esse tipo pode ser híbrido.
  // Desta forma pode ser enviado um valor, objeto, lista e outros..

  valor: number;
  destino: number;

  limpar(){
    this.valor = 0;
    this.destino = 0;
  }

  transferir(){
    console.log("Soliticação de transferência disparada!");

    const transferenciaDados = {valor: this.valor, destino: this.destino};

    this.aoTransferir.emit(transferenciaDados); // palavra emit informando que este evento vai ser emitido.

    this.limpar();

  }
}

