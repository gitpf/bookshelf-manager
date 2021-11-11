import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-book-modal',
  templateUrl: './create-book-modal.component.html',
  styleUrls: ['./create-book-modal.component.scss'],
})
export class CreateBookModalComponent implements OnInit {
  public bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    authors: new FormControl(''),
    borrowed: new FormControl(false, [Validators.required]),
    borrowedAt: new FormControl(new Date()),
    borrowedTo: new FormControl(''),
    pages: new FormControl(0),
    rating: new FormControl(0),
    thumbnail: new FormControl('assets/images/placeholder-image.jpg'),
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {}

  createBook(): void {
    if (this.bookForm.valid) {
      this.ref.close(this.bookForm.value);
    }
  }

  close(): void {
    this.ref.close(false);
  }
}
