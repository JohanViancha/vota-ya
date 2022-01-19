import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { VotaYaService } from 'src/app/services/vota-ya.service';

import { opcionesVotacion } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  votos:any[] = [];
  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {

    this.firestore.collection('opcionesVoto').valueChanges()
    .pipe(
      map((resp:any)=>{
        return resp.map(({name,votos}:any)=>({name, value:votos}))
      })
    )
    .subscribe(resp=>{
      this.votos = resp;
    })
  }

}
