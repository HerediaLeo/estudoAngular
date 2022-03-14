import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'src/app/models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

 private listaTransferencia: any[];
 private url = 'http://localhost:3000/transferencias/'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

get transferencias(){
  return this.listaTransferencia;
}

todasTransferencias(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia>{

    this.adicionarDataTransferencia(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
}

adicionarDataTransferencia(transferencia: any){
  transferencia.data = new Date();
}

}
