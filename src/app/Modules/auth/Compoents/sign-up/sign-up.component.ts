import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  showPassword = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        confirmPassword: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    console.log("this.showPassword", this.showPassword)
  }

  // async register() {
  //   const body =
  //   {
  //     email: this.signUpForm.controls['email'].value,
  //     password: this.signUpForm.controls['password'].value
  //   }
  //   this.authService.register(body).then(res => {
  //     console.log("account Successfully created!!");
  //     debugger
  //     console.log(res);
  //   });
  //   //this.sendEmailVerification();
  // }

}
