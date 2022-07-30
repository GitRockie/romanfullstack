import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  themeChanged() {
    //const prefersDark = window.matchMedia('//(prefers-color-scheme: dark)');

    //if( prefersDark.matches ) {
      document.body.classList.toggle('dark');
    //}

  }

}
