import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgModule } from './primeng/primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { LibraryComponent } from './components/library/library.component';
import { CreateBookModalComponent } from './modals/create-book-modal/create-book-modal.component';
import { EditBookModalComponent } from './modals/edit-book-modal/edit-book-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    CreateBookModalComponent,
    EditBookModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
  ],
  entryComponents: [CreateBookModalComponent, EditBookModalComponent],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
