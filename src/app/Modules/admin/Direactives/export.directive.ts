import { Directive, HostListener, Input } from '@angular/core';
import { ExportService } from '../Services/export.service';

@Directive({
  selector: '[appExport]'
})
export class ExportDirective {

  constructor(private exportService: ExportService) { }

  @Input('appExport') customers: any;
  @Input() fileName: any;

  @HostListener('click', ['$event']) onClick($event:any) {
    console.log('clicked: ' + $event);
    this.exportService.exportExcel(this.customers, this.fileName);
  }
}
