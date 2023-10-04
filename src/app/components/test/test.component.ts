import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(
    private _http: HttpClient,
    private _snackbar: MatSnackBar
  ){}

  sendToPHP(){
    const nowTime = new Date().toLocaleTimeString();
    const nowDate = new Date().toLocaleDateString();
    const form = new FormData();
    form.append("body", "Hello from Angular");
    form.append("date", nowDate);
    form.append("time", nowTime);
    console.log(form.get('body'))
    this._http.post('/sendmail.php', form, {responseType: 'text'}).subscribe({
      next:(data)=>{
        console.log(data);
        this._snackbar.open("Mail sent successfully.", "Dismiss", {
          duration:4000
        })
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }

}
