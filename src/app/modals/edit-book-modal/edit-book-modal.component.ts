import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.scss'],
})
export class EditBookModalComponent implements OnInit {
  private bookToEdit: IBook;

  public bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    authors: new FormControl(''),
    borrowed: new FormControl(false, [Validators.required]),
    borrowedAt: new FormControl(new Date()),
    borrowedTo: new FormControl(''),
    pages: new FormControl(0),
    rating: new FormControl(0),
    thumbnail: new FormControl(0),
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.bookToEdit = this.config.data.book;
    this.bookForm.reset({
      id: (Math.random() + 1).toString(36).substring(10),
      thumbnail: this.bookToEdit.thumbnail,
      title: this.bookToEdit.title,
      authors: this.bookToEdit.authors,
      borrowed: this.bookToEdit.borrowed,
      borrowedAt: this.bookToEdit.borrowedAt,
      borrowedTo: this.bookToEdit.borrowedTo,
      pages: this.bookToEdit.pages,
      rating: this.bookToEdit.rating,
    });
  }

  ngOnInit(): void {}

  editBook(): void {
    if (this.bookForm.valid) {
      this.ref.close(this.bookForm.value);
    }
  }

  close(): void {
    this.ref.close(false);
  }
}
