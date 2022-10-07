import { SplitInterpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService, Spinner } from 'ngx-spinner';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  addBasicDetailsForm!:FormGroup;
  selected = 'none';
  id:any;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private activatedRoute: ActivatedRoute,private matSnackBar:MatSnackBar,private spinner: NgxSpinnerService,) { 
    this.id=  this.activatedRoute.snapshot.queryParams['id'];
    console.log(this.id);
debugger
  }


  initForm()
  {
    this.addBasicDetailsForm=this.formBuilder.group(
      {
        Name:['',[Validators.required]],
        Approve:['',[Validators.required]],
        projectName:['',[Validators.required]],
        roleAndProject:['',[Validators.required]],
        department:['',[Validators.required]],
        reportingName:['',Validators.required]
      }
    )
  }
  ngOnInit(): void {
    this.initForm();
  }
save()
{
  if(this.addBasicDetailsForm.valid)
  {
    const result = {
      Name: this.addBasicDetailsForm.controls['Name'].value,
      Approve: this.addBasicDetailsForm.controls['Approve'].value,
      projectName: this.addBasicDetailsForm.controls['projectName'].value,
      roleAndProject: this.addBasicDetailsForm.controls['roleAndProject'].value,
      department: this.addBasicDetailsForm.controls['department'].value,
      reportingName: this.addBasicDetailsForm.controls['reportingName'].value,
      createdAt: new Date().getTime(),
      status: true,
      userRole: '2'
    };
    this.authService.setCollectionDataById('Owner', this.id, result).then(() => {
      this.matSnackBar.open(('Basic Information Added successfully!'), 'close',
        {
          duration: 5000
        });
      this.authService.verificationMail();
    this.spinner.hide()
      this.router.navigate(['/auth/basic-details'],{ queryParams: { id: this.id }});

    }).catch(err => {
      this.spinner.hide();
      this.matSnackBar.open(err.message, 'close',
        {
          duration: 5000
        });
    })
  }
}
}

