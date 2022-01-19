import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import {tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class VotaYaService {

  private opcionesVotacion:any[] = [];
  constructor(private firestore:AngularFirestore){

  }

  getNominados():Observable<any>{

      return this.firestore.collection('opcionesVoto').get()
    
 
  }

  async votarPor(voto:any):Promise<any>{
    await this.firestore.collection('opcionesVoto').doc(voto.id).get().subscribe((data:any)=>{
      return this.firestore.collection<any>('opcionesVoto').doc(voto.id).update({votos:data.data().votos+1})
    });



  }
}
