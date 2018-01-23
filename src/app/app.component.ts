import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VERSION } from '@angular/material';
import { FileValidators } from './input-file/file-validators';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private version: any;
  formDoc: FormGroup;
  private ngVersion = VERSION;
  imagePreviewLink = '';

  ngOnInit() {
    this.formDoc = new FormGroup({
      'requiredfile': new FormControl(null, [Validators.required, FileValidators.maxContentSize(512000)]),
      'recaptcha': new FormControl(null, [Validators.required])
    });
    this.onChanges();
  }

  onSubmit() {
    console.log('SUBMITTED', this.formDoc);
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
