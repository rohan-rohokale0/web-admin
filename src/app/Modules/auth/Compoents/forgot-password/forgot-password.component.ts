import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private authService: AuthService, private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.forgotPasswordForm = this.formBuilder.group(
      {
        email: ['', Validators.required]
      }
    )
  }

  forgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.spinner.show();
      this.angularFireAuth.sendPasswordResetEmail(this.forgotPasswordForm.controls['email'].value)
        .then((res: any): any => {
        this.router.navigate(['/auth/sign-in']);
          this.toastr.success("Password reset email sent, check your inbox.");
          this.spinner.hide();
        }).catch((err: any) => {
          this.toastr.error(err.message);
        });
    }
  }

}
