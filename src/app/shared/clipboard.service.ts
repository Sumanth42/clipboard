import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
firestoreCollection:AngularFirestoreCollection
  constructor(private firestore:AngularFirestore) {
    this.firestoreCollection=firestore.collection('items');
  }
    addItem(item:string){
      this.firestoreCollection.add({
        item:item
      })
    }
    deleteItem(id:string){
      this.firestoreCollection.doc(id).delete();
    }
}
