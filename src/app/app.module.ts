import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { HttpClientModule } from '@angular/common/http';

import { ByteFormatPipe } from './byte-format.pipe';
import { InputFileComponent } from './input-file/input-file.component';

import { AppComponent } from './app.component';
import { NotifyDialogComponent } from './notify-dialog/notify-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFileComponent,
    ByteFormatPipe,
    NotifyDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    HttpClientModule
  ],
  entryComponents: [NotifyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
