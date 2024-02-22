import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GestioneSpeseComponent } from './gestione-spese/gestione-spese.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule, matSelectAnimations} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    GestioneSpeseComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
