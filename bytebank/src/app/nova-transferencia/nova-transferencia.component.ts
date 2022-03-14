import { Transferencia } from 'src/app/models/transferencia.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../service/transferencia/transferencia.service';


// EventEmitter biblioteca para passar os dados

@Component({
    selector: 'app-nova-transferencia', //nome do componente.
    templateUrl: './nova-transferencia.component.html', // aonde esta localicado o template deste componente.
    styleUrls: ['./nova-transferencia.component.scss'] //css aplicado a este componente. Um componente pode ter mais de um arquivo css.
  })


export class NovaTransferenciaComponent{

  constructor(private service: TransferenciaService){}

  @Output() aoTransferir = new EventEmitter<any>(); //anotação para disparar um evento.
  //Tipagem com ANY,  recurso do Typescript que ao invés de eu dizer que EventEmitter é de um tipo específico, estou dizendo que esse tipo pode ser híbrido.
  // Desta forma pode ser enviado um valor, objeto, lista e outros..

  valor: number;
  destino: number;

  transferir(){
    console.log("Soliticação de transferência disparada!");

    const transferenciaDados: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionarTransferencia(transferenciaDados).subscribe(resultado => {
      console.log(transferenciaDados);
      this.limpar();
    }, error =>{
      console.error(error);
    })

    //this.aoTransferir.emit(transferenciaDados); // palavra emit informando que este evento vai ser emitido.


    this.limpar();
  }

  limpar(){
    this.valor = 0;
    this.destino = 0;
  }
}

