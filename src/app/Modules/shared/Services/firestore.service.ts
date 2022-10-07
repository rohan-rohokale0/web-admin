import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}
  getCollectionData(collectionPath: any) {
    return this.firestore.doc(collectionPath).get();
  }

  getCollectionDataById(collectionPath: any, docId: any) {
    return this.firestore.collection(collectionPath).doc(docId).get();
  }

  addCollectionData(collectionPath: any, data: any) {
    debugger;
    return this.firestore.collection(collectionPath).add(data);
  }

  updateCollectionDataById(collectionPath: any, docId: any, data: any) {
    return this.firestore.collection(collectionPath).doc(docId).update(data);
  }
  deleteCollectionDataById(collectionPath: any, docId: any) {
    return this.firestore.collection(collectionPath).doc(docId).delete();
  }
  setCollectionDataById(collectionPath: any, docId: any, data: any) {
    return this.firestore.collection(collectionPath).doc(docId).set(data);
  }
  getCollectionDataByCondition(collection: any, condition: any, orderBy: any) {
    let query: any = this.firestore.collection(collection).ref;
    if (condition) {
      if (condition[0] instanceof Array) {
        for (const w of condition) {
          query = query.where(w[0], w[1], w[2]);
        }
      }
    }
    orderBy.forEach((element: any) => {
      if (Array.isArray(element)) {
        query = query.orderBy(element[0], element[1]);
      } else {
        query = query.orderBy(element);
      }
    });
    return query.get();
  }
}
