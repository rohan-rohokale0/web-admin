import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/Modules/shared/Services/firestore.service';
import * as _moment from 'moment';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import * as moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

export const MY_FORMATS = {
  parse: {
    dateInput: ['YYYY-MMMM-DD'],
  },
  display: {
    dateInput: 'EE, MMMM DD, YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AddCategoryComponent implements OnInit {
  addInForm!: FormGroup;
  user: any;
  collectionPath: any;
  // date = new FormControl(moment());
  date: any;

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
      hours: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }

  dateFilter: (date: Date | null) => boolean = (date: Date | null) => {
    const day = date?.getTime();
    return day !== 0 && day !== 6;
  };
  save() {}
}
