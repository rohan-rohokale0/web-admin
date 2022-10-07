import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/Modules/shared/Services/firestore.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  addInForm!: FormGroup;
  user:any;
  collectionPath:any;
  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private firestoreService: FirestoreService,
    private toastr: ToastrService
  ) {
    this.user = JSON.parse(sessionStorage.getItem('users')!);
    this.collectionPath = 'Owner' + '/' + this.user.id + '/' + 'Category';
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.addInForm = this.formBuilder.group({
      ProjectName: ['', [Validators.required]],
      hours:['', [Validators.required]],
      description:['', [Validators.required]]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  save() {
  }
}