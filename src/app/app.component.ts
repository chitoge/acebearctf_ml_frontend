import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VERSION } from '@angular/material';

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

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.formDoc = new FormGroup({
      'requiredfile': new FormControl(null, [Validators.required])
    });
  }
}
