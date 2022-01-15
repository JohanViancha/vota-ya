import { Component, OnInit } from '@angular/core';
import { opcionesVotacion } from 'src/app/interfaces/interface';
import { VotaYaService } from 'src/app/services/vota-ya.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {

  opciones:opcionesVotacion[] = [];
  constructor(private _votaYa:VotaYaService) { 


  }

  ngOnInit(): void {

    this._votaYa.getVotacion().subscribe((doc)=>{
      doc.forEach((element:any) => {
        this.opciones.push(element.payload.doc.data());
      });
    },error=>{
      console.log(error);
    })

    console.log(this.opciones);
  }

}
