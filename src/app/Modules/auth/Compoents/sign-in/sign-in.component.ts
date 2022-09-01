import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  showPassword = false;
  SignInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
    const email = this.SignInForm.controls['email'].value;
    const password = this.SignInForm.controls['password'].value;
    debugger
    if ((email === 'rohanrohokale1234@gmail.com') && (password == '12345')) {
      console.log("Welcome");
    }
  }

}
