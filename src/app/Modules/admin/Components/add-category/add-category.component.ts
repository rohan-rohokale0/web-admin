import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  addInForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private formBuilder: FormBuilder
  ) {}

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
}
