import { Injectable } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(body: any) {
    return createUserWithEmailAndPassword(this.auth, body.email, body.password);
  }

  logout() {
    return signOut(this.auth);
  }
}
