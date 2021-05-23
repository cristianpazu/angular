import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/hereo.module';
import { NgForm } from '@angular/forms';
import { StiendaServiceService } from 'src/app/service/stienda-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  cliente: ClienteModel = new ClienteModel;
  cargando = false;
  

  constructor(private https:StiendaServiceService) { }

  ngOnInit(): void {
    this.cargando = false;
  }

  registrar(form: NgForm){
    
    this.https.regsitro(this.cliente)
    .subscribe(resp=>{
      console.log(resp)
      this.cargando=true;
    })
  }
}
