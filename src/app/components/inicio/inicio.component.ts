import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/hereo.module';
import { StiendaServiceService } from 'src/app/service/stienda-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private datos:StiendaServiceService) { }

  public ventas2: ClienteModel[]=[];
  cargando = false;
  ngOnInit(): void {
    this.cargando= true;
    this.obtenerdatos();
  }

  obtenerdatos(){
    this.datos.obtenertodos().subscribe(( resp:any)=>{
      console.log(resp);
      this.ventas2= resp;
      this.cargando=false;
    })
    
  }

  eliminardatos(cc:ClienteModel,i:number){
    this.datos.eliminar(cc.idProducto.toString()).subscribe(resp=>{
      this.obtenerdatos();
    });
    
  
  }

}
