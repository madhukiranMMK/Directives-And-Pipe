import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateInputFieldDirective } from './validate-input-field.directive';
import { FormsModule } from '@angular/forms';
import { PipeTransformsPipe } from './pipe-transforms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ValidateInputFieldDirective,
    PipeTransformsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
