import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AllowCookiesComponent } from './components/allow-cookies/allow-cookies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  year = new Date().getFullYear()

  constructor(
    private _bottomSheet: MatBottomSheet
  ){}

  ngOnInit(): void {
    // this._bottomSheet.open(AllowCookiesComponent, {
    //   hasBackdrop: true,
    //   disableClose: true
    // })
  }
}
