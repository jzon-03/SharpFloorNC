import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('submitButton', {static: true}) submitButton:MatButton | undefined
  queryMode: ProgressBarMode = "query";
  determinateMode: ProgressBarMode = "determinate";
  selectedMode = this.determinateMode;

  constructor(
    private _fb: FormBuilder,
    private _crud: MainserviceService,
    private _snackbar: MatSnackBar
  ) {  }

  assistList = [
    "I would like a demo.",
    "I would like to talk to sales.",
    "I need customer support.",
  ]

  fileForm = this._fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    businessName: ['', Validators.required],
    phone: [''],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    howCanWeAssistYou: ['', Validators.required],
    comments: ['']
  })

  ngOnInit(): void {

  }

  onSubmit() {
    this.selectedMode = this.queryMode;
    this.fileForm.disable();
    this._crud.sendEmail(new EmailForm(this.fileForm.value)).subscribe({
      next:()=>{
        console.log("Email sent")
        this.fileForm.reset();
        this.fileForm.enable();
        this.selectedMode = this.determinateMode;
        this._snackbar.open("Message sent ✔!", "Dismiss", {
          duration: 4000
        });
      },
      error:()=>{
        console.log("Error");
        this.fileForm.enable();
        this.selectedMode = this.determinateMode;
        this._snackbar.open("ERROR sending message ❌! Please try again later.", "Dismiss", {
          duration: 4000
        });
      }
    })

  }
}

export class EmailForm{
  body: string = "";
  subject: string = "";

  constructor(fileForm: any){
    this.body = `
      <table style="border: 1px solid grey;">
        <thead>
            <tr style="background-color:lightgrey">
                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Assist with</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>` + fileForm['firstName'] + fileForm['lastName'] + `</td>
                <td>` + fileForm['businessName'] + `</td>
                <td>` + fileForm['phone'] + `</td>
                <td>` + fileForm['email'] + `</td>
                <td>` + fileForm['howCanWeAssistYou'] + `</td>
            </tr>
        </tbody>
    </table>
    <pre>` + fileForm['comments'] + `</pre>
    `
    this.subject = fileForm['howCanWeAssistYou'];
  }
}
