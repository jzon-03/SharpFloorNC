import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  env = environment

  queryMode: ProgressBarMode = "query";
  determinateMode: ProgressBarMode = "determinate";
  selectedMode = this.determinateMode;
  disableButton = false;

  selectedFile: File | undefined;
  isTooLarge = false;
  fileSize = 0;

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
    comments: [''],
    fromPage: [' Contact us']
  })

  ngOnInit(): void {

  }

  onSelectedFile(event: any){
    this.isTooLarge = false;
    var tempFile: File = event.target.files[0];
    if (tempFile.size > 10000000){
      this.isTooLarge = true;
      this.fileSize = tempFile.size;
      console.log("File size too large.");
    }else{
      this.selectedFile = event.target.files[0];
      this.isTooLarge = false;
    }
  }

  onSubmit() {
    this.selectedMode = this.queryMode;
    this.disableButton = true;
    const formData = new FormData();
    const emailForm = new EmailForm(this.fileForm.value);

    formData.append('subject', emailForm.subject);
    formData.append('body', emailForm.body);

    if(this.selectedFile){
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }
    this.fileForm.disable();

    this._crud.sendEmail(formData).subscribe({
      next:()=>{
        console.log("Email sent")
        this.fileForm.reset();
        this.fileForm.enable();
        this.fileForm.controls['fromPage'].setValue(" Contact us");
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("Message sent ✔!", "Dismiss", {
          duration: 4000
        });
      },
      error:(err)=>{
        console.log("Error ", err);
        this.fileForm.enable();
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("ERROR sending message" + err.message, "Dismiss", {
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
            <tr style="background-color:lightblue">
                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Assist with</th>
                <th>Reference</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>` + fileForm['firstName'] + ' ' + fileForm['lastName'] + `</td>
                <td>` + fileForm['businessName'] + `</td>
                <td>` + fileForm['phone'] + `</td>
                <td>` + fileForm['email'] + `</td>
                <td>` + fileForm['howCanWeAssistYou'] + `</td>
                <td>` + fileForm['fromPage'] + `</td>
            </tr>
        </tbody>
    </table>
    <pre>` + fileForm['comments'] + `</pre>
    `
    this.subject = 'Contact us>>' + fileForm['howCanWeAssistYou'];
  }
}
