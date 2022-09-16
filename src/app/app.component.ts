import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-admin';

  constructor() {
  }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(e: KeyboardEvent) {
  //   console.log(e)
  //   if (e.key === 'F12') {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.key === "I") {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.key === "C") {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.key === "J") {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.key == "U") {
  //     return false;
  //   }
  //   return true;
  // }

  // constructor() {
  //   document.addEventListener('contextmenu', function(e) {
  //     e.preventDefault();
  //   });
  // }

}
