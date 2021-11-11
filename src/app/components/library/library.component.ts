import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Subject, takeUntil, tap } from 'rxjs';
import { CreateBookModalComponent } from 'src/app/modals/create-book-modal/create-book-modal.component';
import { EditBookModalComponent } from 'src/app/modals/edit-book-modal/edit-book-modal.component';
import { IBook } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit, OnDestroy {
  public gridLoading = false;
  public selectedBook: IBook;
  public results: IBook[] = [];
  public collection: IBook[] = [
    {
      id: 'xieSuAAACAAJ',
      title: 'Harry Potter and the Sorcerers Stone',
      thumbnail:
        'http://books.google.com/books/content?id=djf_RQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      borrowed: true,
      borrowedAt: new Date(),
      borrowedTo: 'Andre Luis',
      rating: 5,
      pages: 455,
      authors: 'J.K.Rowling',
    },
    {
      id: 'WeHsAQAAQBAJ',
      title: 'The Art of War',
      thumbnail:
        'http://books.google.com/books/content?id=WeHsAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      borrowed: false,
      borrowedAt: null,
      borrowedTo: '',
      rating: 3,
      pages: 132,
      authors: 'Tzu, Sun',
    },
  ];

  public selectedBooks: IBook[] = [];
  private onDestroy$ = new Subject<void>();

  constructor(
    private booksService: BooksService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService
  ) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public search(event) {
    this.onDestroy$.next();
    this.booksService
      .getBooks(event.query)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((res) => {
        if (res.totalItems > 0) {
          const results = res.items.map((book) => {
            return {
              id: book.id,
              title: book.volumeInfo.title,
              rating: 0,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
              borrowed: false,
              borrowedTo: null,
              borrowedAt: null,
              pages: book.volumeInfo.pageCount,
              authors: book.volumeInfo.authors
                ? book.volumeInfo.authors.toString()
                : '',
              year: book.volumeInfo.publishedDate,
            };
          });
          this.results = results;
        } else {
          this.results = [];
        }
      });
  }

  onSelect(book: IBook): void {
    this.collection.unshift(book);
    this.selectedBook = null;
  }

  public clear(table: Table): void {
    table.clear();
  }
  openNewModal(): void {
    const ref = this.dialogService.open(CreateBookModalComponent, {
      header: 'Create a book',
      contentStyle: { overflow: 'visible' },
    });

    ref.onClose.subscribe((bookCreated: IBook) => {
      if (bookCreated) {
        this.collection.unshift(bookCreated);
        this.messageService.add({
          severity: 'success',
          summary: 'Success!',
          detail: 'Book was created with success!',
        });
      }
    });
  }

  openEditModal(book: IBook): void {
    const ref = this.dialogService.open(EditBookModalComponent, {
      header: 'Edit a book',
      contentStyle: { overflow: 'visible' },
      data: { book: book },
    });

    ref.onClose.subscribe((bookUpdated: IBook) => {
      if (bookUpdated) {
        this.collection.splice(
          this.collection.findIndex((b) => b.id === book.id),
          1,
          bookUpdated
        );
        this.messageService.add({
          severity: 'success',
          summary: 'Success!',
          detail: 'Book was edited with success!',
        });
      }
    });
  }

  deleteSelectedBooks(): void {
    this.confirmationService.confirm({
      message: `Do you want to delete selected books?`,
      header: 'Delete',
      acceptLabel: 'Yes',
      rejectLabel: 'Cancel',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.collection = [
          ...this.collection.filter(
            (col) => !this.selectedBooks.some((c) => c.id === col.id)
          ),
        ];
        this.messageService.add({
          severity: 'success',
          summary: 'Success!',
          detail: 'Books were deleted with success!',
        });
      },
      reject: () => {},
    });
  }
}
