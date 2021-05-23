import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StiendaServiceService } from 'src/app/service/stienda-service.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  public texto: string=''
  public tie:any[]=[]
  constructor(private activatedrouter:ActivatedRoute, private htt:StiendaServiceService) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe(params=>{
      this.texto = params.texto;
      console.log(this.texto)
      this.htt.buscarforId(params.texto).subscribe(tiend=>{
        this.tie.push(tiend);
      })
    })
  }

}
