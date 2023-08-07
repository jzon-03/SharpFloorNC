import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-allow-cookies',
  templateUrl: './allow-cookies.component.html',
  styleUrls: ['./allow-cookies.component.css']
})
export class AllowCookiesComponent {

  constructor(
    private _botomSheetRef: MatBottomSheetRef<AllowCookiesComponent>
  ){ }

  closeBS(){
    this._botomSheetRef.dismiss(true)
  }
}
