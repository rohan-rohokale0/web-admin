import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  selected = 'none';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageUrl = false;
  userImageUrl = '';
  addProductForm!: FormGroup;
  imageUploadPathName = 'productImages';
  addProduct: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.addProductForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      productCompany:['',[Validators.required]],
      productDiscount:['',[Validators.required]],
      productPrice:['',[Validators.required]]

    });
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    debugger;
    this.croppedImage = event.base64;
    this.imageUrl = true;
    console.log(this.imageUrl);
  }

  imageLoaded(image: LoadedImage) {}

  cropperReady() {}

  loadImageFailed() {}

  onUploadImage(event: any) {
    this.imageUrl = event.imageUrl;
  }

  deleteimg() {
    //this.imageUrl = '';
  }
  back() {
    this.router.navigate(['admin/product']);
  }
}
