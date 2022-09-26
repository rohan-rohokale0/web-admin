import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements OnInit {
  @Input() aspectRatio = '4 / 3';
  @Input() resizeToWidth: any;
  @Input() resizeToHeight: any;
  @Input() cropperMinWidth: any;
  @Input() cropperMinHeight: any;
  @Input() imagesPath = '';
  @Input() disableFile!: boolean;
  @Output() uploadEvent = new EventEmitter<any>();
  @ViewChild('file') file!: ElementRef;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  isUploadDisabled = true;
  selectedFiles!: FileList;
  percentage!: number;
  downloadURL: any;
  fb: any;
  snapshot: any;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}
}

// fileChangeEvent(event: any): void {
//   if (event.srcElement.value !== '') {
//     this.isUploadDisabled = false;
//     this.imageChangedEvent = event;
//   }
// }

// imageCropped(event: ImageCroppedEvent) {
//   this.croppedImage = event.base64;
// }

// base64ImageToBlob(str:any) {
//   const pos = str.indexOf(';base64,');
//   const type = str.substring(5, pos);
//   const b64 = str.substr(pos + 8);
//   const imageContent = atob(b64);
//   const buffer = new ArrayBuffer(imageContent.length);
//   const view = new Uint8Array(buffer);
//   for (let n = 0; n < imageContent.length; n++) {
//     view[n] = imageContent.charCodeAt(n);
//   }
//   const blob = new Blob([buffer], { type: type });
//   return blob;
// }

// onUploadClick() {
//   const blob = <File>this.base64ImageToBlob(this.croppedImage);
//   this.onUploadImage({ files: blob });
// }

// public onUploadImage(data: { files: File }): void {
//   this.spinner.show();
//   const that = this;
//   const n = Date.now();
//   const file = data.files;
//   const filePath = `${this.imagesPath}/${n}`;
// const fileRef = this.storage.ref(filePath);
// const task = this.storage.upload(`${this.imagesPath}/${n}`, file);
// this.snapshot = task.snapshotChanges().pipe(
//   finalize(() => {
//     that.spinner.hide();
//     this.downloadURL = fileRef.getDownloadURL();
//     this.downloadURL.subscribe((url) => {
//       this.isUploadDisabled = true;
//       this.spinner.hide();
//       this.imageChangedEvent = '';
//       this.deleteImage();
//       this.uploadEvent.emit({ imageUrl: url });
//     });
