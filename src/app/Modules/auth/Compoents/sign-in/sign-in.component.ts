import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  showPassword = false;
  SignInForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private angularFireAuth: AngularFireAuth,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.SignInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    console.log('this.showPassword', this.showPassword);
  }

  login() {
    if (this.SignInForm.valid) {
      this.spinner.show();
      this.router.navigate(['/admin/dashboard']);
      this.spinner.hide();
      // this.angularFireAuth
      //   .signInWithEmailAndPassword(
      //     this.SignInForm.controls['email'].value,
      //     this.SignInForm.controls['password'].value
      //   )
      //   .then((result: any) => {
      //     if (result.user.emailVerified) {
      //       this.authService
      //         .getCollectionDataById('DatabaseLogin', result.user.uid)
      //         .subscribe((snapshot: any) => {
      //           debugger
      //           const userToken = {
      //             fcmToken: sessionStorage.getItem('fcmToken'),
      //           };
      //           if (snapshot.exists) {
      //             debugger
      //             const data: any = snapshot.data();
      //             data.id = snapshot.id;
      //             if (data.status) {
      //               debugger;
      //               this.authService.updateCollectionDataById(
      //                 'DatabaseLogin',
      //                 snapshot.id,
      //                 userToken
      //               );
      //               sessionStorage.setItem(
      //                 'fcmToken',
      //                 result.user.refreshToken
      //               );
      //               const firstName = data.firstName;
      //               const lastName = data.lastName;
      //               const localData = {
      //                 firstName,
      //                 lastName,
      //               };
      //               sessionStorage.setItem('user', JSON.stringify(localData));
      //               sessionStorage.setItem('users', JSON.stringify(data));
      //               if (data.userRole === '2') {
      //                 this.router.navigate(['/admin/dashboard']);
      //               }
      //               ;
      //               this.spinner.hide();
      //           this._snackBar.open('You successfully logged in!', 'Cancel', {
      //                 duration: 3000
      //               }); 
      //             }
      //           }
      //         });
      //     } else {
      //       this.spinner.hide();
      //       this._snackBar.open('Your email is not Verified. Please verify', 'Cancel', {
      //         duration: 3000
      //       }); 
          
      //     }
      //   })
      //   .catch((err: any) => {
      //     this.spinner.hide();
      //     this.toastr.error(err.message);
      //   });
    }
  }
}
