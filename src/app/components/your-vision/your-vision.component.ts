import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { EmailForm } from '../contact/contact.component';

@Component({
  selector: 'app-your-vision',
  templateUrl: './your-vision.component.html',
  styleUrls: ['./your-vision.component.css']
})
export class YourVisionComponent {

  @ViewChild('submitButton', {static: true}) submitButton:MatButton | undefined
  queryMode: ProgressBarMode = "query";
  determinateMode: ProgressBarMode = "determinate";
  selectedMode = this.determinateMode;

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
    fromPage: [' Your vision']
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
        this.selectedMode = this.determinateMode;
        this._snackbar.open("Message sent ✔!", "Dismiss", {
          duration: 4000
        });
      },
      error:(err)=>{
        console.log("Error ", err);
        this.fileForm.enable();
        this.selectedMode = this.determinateMode;
        this._snackbar.open("ERROR sending message ❌! Please try again later.", "Dismiss", {
          duration: 4000
        });
      }
    })

  }
}