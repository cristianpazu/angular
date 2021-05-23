import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../models/hereo.module';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StiendaServiceService {

  public url= 'http://localhost:8080'
  constructor(private http:HttpClient) {
    this.obtenertodos();
  }
  obtenertodos(){
    return this.http.get(`${this.url}/clientes`)
    .pipe(
      delay(2500)
    );
  }

  regsitro(cliente:ClienteModel){
    return this.http.post(`${this.url}/clientes`, cliente

    ) .pipe(
      delay(2500)
    );
  }

  eliminar(id:String):Observable<any>{
  /*  let direccion = this.url + '/clientes';
    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
      body:cliente
    }*/
    return this.http.delete(`${this.url}/clientes/${id}`)
  }

  editar(id:String,ventas:ClienteModel){
    return this.http.put(`${this.url}/clientes/${id}`,ventas)
  }

  buscarforId(id:string){
    return this.http.get(`${this.url}/clientes/${id}`)
  }
}
