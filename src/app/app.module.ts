import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { ScmModule } from './scm/scm.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     AuthModule,
     MatCardModule,
     ScmModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
