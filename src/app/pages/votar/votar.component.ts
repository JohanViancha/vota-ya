import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opcionesVotacion } from 'src/app/interfaces/interface';
import { VotaYaService } from 'src/app/services/vota-ya.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {

  opcionesCandidatos:any[];
  constructor(private _votaYa:VotaYaService, private router:Router) { 

    this.opcionesCandidatos = [];
  }

  ngOnInit(): void {

    this._votaYa.getNominados().subscribe((doc)=>{
      console.log(doc);
      doc.forEach((element:any) => {
        this.opcionesCandidatos.push(element.data());
      });
    },error=>{
      console.log(error);
    })
  }


  async votarPor(opcionVotar:any){

    console.log(opcionVotar);
    await this._votaYa.votarPor(opcionVotar).then((ele)=>{
      Swal.fire({
        title: 'Exitoso!',
        text: 'El voto ha sido registrado',
        icon: 'success',
        confirmButtonText: 'Ok!'
      })
      
    })
    .catch(err=>{
      console.log(err);
    });

  }
}
