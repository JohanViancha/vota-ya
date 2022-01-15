import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { opcionesVotacion } from '../interfaces/interface';



@Injectable({
  providedIn: 'root'
})
export class VotaYaService {

  constructor(private firestore:AngularFirestore){

  }

  getVotacion():Observable<any>{
    return this.firestore.collection('opcionesVoto').snapshotChanges();
  }
}
