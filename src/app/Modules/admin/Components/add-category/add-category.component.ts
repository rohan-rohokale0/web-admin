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
  addCategoryForm!: FormGroup;
  collectionPath = '';
  user: any;
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
    this.addCategoryForm = this.formBuilder.group({
      categoryName: ['', [Validators.required]],
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  save() {
    if (this.addCategoryForm.valid) {
      // if (this.alreadyExists()) {
      //   this.matSnackBar.open(
      //     this.commonDataBindingService.getLabel(
      //       'label_category_already_exists'
      //     ),
      //     'close',
      //     {
      //       duration: AppSetting.MAT_SNACKBAR_TIME,
      //     }
      //   );
      // } else {
      this.spinner.show();
      const data = {
        categoryName: this.addCategoryForm.controls['categoryName'].value,
        createdAt: new Date().getTime(),
        createdBy: this.user.id,
        updatedAt: 0,
        updatedBy: '',
        status: true,
      };
      this.firestoreService
        .addCollectionData(this.collectionPath, data)
        .then((res) => {
          this.toastr.success('Category added successfully.');
          this.closeDialog();
          this.spinner.hide();
        })
        .catch((error) => {
          this.closeDialog();
          console.log(error);
        });
      
    }
    this.spinner.hide();
  }
}

// alreadyExists() {
//   const categoryList = this.datastoreService.category;
//   const existList = categoryList.filter(
//     (element) =>
//       element.categoryName === this.categoryForm.controls.categoryName.value
//   );
//   if (existList.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
