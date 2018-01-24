import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FileValidators } from './input-file/file-validators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifyDialogComponent } from './notify-dialog/notify-dialog.component';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  formDoc: FormGroup;
  imagePreviewLink = '';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.formDoc = new FormGroup({
      'requiredfile': new FormControl(null, [Validators.required, FileValidators.maxContentSize(512000)]),
      'recaptcha': new FormControl(null, [Validators.required])
    });
    this.onChanges();
  }

  onSubmit() {
    var formData = new FormData();

    formData.append('file', this.formDoc.get('requiredfile').value.files[0]);

    const headers = new HttpHeaders()
            .set("Recaptcha-Response", this.formDoc.get('recaptcha').value);

    const req = this.http.post('http://localhost:5000/api/verifier', formData, {headers})
      .subscribe(
        res => {
          this.dialog.open(NotifyDialogComponent, {data: res});
        },
        err => {
          console.log("Error occured");
        }
      );
    this.formDoc.reset();
  }

  onChanges(): void {
    this.formDoc.get('requiredfile').valueChanges.subscribe(val => {
      if (val == null) {
        this.imagePreviewLink = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        this.imagePreviewLink = reader.result;
      };
      reader.readAsDataURL(val.files[0]);
    });
  }
}
