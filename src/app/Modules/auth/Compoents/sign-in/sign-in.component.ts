import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  showPassword = false;
  SignInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,
    private angularFireAuth: AngularFireAuth,
    private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.SignInForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      }
    )
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    console.log("this.showPassword", this.showPassword)
  }

  login() {
    if (this.SignInForm.valid) {
      this.angularFireAuth.signInWithEmailAndPassword(this.SignInForm.controls['email'].value, this.SignInForm.controls['password'].value)
        .then((result: any) => {
          if (result.user.emailVerified) {
            this.authService.getCollectionDataById('DatabaseLogin', result.user.uid).subscribe((snapshot: any) => {
              const userToken = {
                fcmToken: sessionStorage.getItem('fcmToken')
              };
              if (snapshot.exists) {
                const data: any = snapshot.data();
                data.id = snapshot.id;
                if (data.status) {
                  this.authService.updateCollectionDataById('DatabaseLogin', snapshot.id, userToken);
                  sessionStorage.setItem('fcmToken', result.user.refreshToken);
                  sessionStorage.setItem('user', data);
                  if (data.userRole === '2') {
                    this.router.navigate(['/admin/dashboard']);
                  }
                }
              }
            });
            this.matSnackBar.open('You successfully logged in!'), 'close',
            {
              duration: 5000
            };
          } else {
            this.matSnackBar.open('Your email is not Verified. Please verify'), 'close',
            {
              duration: 5000
            };
          }
        })
        .catch((err: any) => {
          //  this.spinner.hide();
          this.matSnackBar.open(err.message, 'close',
            {
              duration: 5000
            });
        });
    } else {
      //this.errorBindingService.getFormValidationErrors(this.signInForm);
      //this.spinner.hide();
    }
  }

}
