import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './package_files/material_module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneNumberDirective } from './Direactives/phone-number.directive';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ImageCropperComponent } from './Componets/image-cropper/image-cropper.component';
import { FirestoreService } from './Services/firestore.service';

@NgModule({
  declarations: [PhoneNumberDirective, ImageCropperComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MaterialModule,
    CardModule,
    FormsModule,
    PhoneNumberDirective,
    NgxChartsModule,
    ImageCropperComponent,
    ReactiveFormsModule,
    
  ],
  providers:[FirestoreService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
  constructor() {}
}

declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
