// import { Injectable } from '@angular/core';

// import {
//   Auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from '@angular/fire/auth';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private auth: Auth) { }
//   login({ email, password }: any) {
//     return signInWithEmailAndPassword(this.auth, email, password);
//   }

//   register(body: any) {
//     return createUserWithEmailAndPassword(this.auth, body.email, body.password);
//   }

//   logout() {
//     return signOut(this.auth);
//   }
// }


import { Injectable, NgZone } from '@angular/core';
import { User } from '../../shared/Interface/Users';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  isLoggedIn!: boolean;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private firestore: AngularFirestore,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user:any) => {
      debugger
      if (user) {
        this.isLoggedIn=true;
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        this.isLoggedIn=false;
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }


  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  setCollectionDataById(collectionPath: any, docId: any, data: any) {
    return this.firestore.collection(collectionPath).doc(docId).set(data);
  }

  getCollectionDataById(collectionPath: any, docId: any) {
    return this.firestore.collection(collectionPath).doc(docId).get();
  }

  updateCollectionDataById(collectionPath: any, docId: any, data: any) {
    return this.firestore.collection(collectionPath).doc(docId).update(data);
  }

  verificationMail() {
    debugger
    this.afAuth.authState.subscribe(
      (user: any) => user.sendEmailVerification().then(
        () => console.log('email sent')));

  }
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }
}
