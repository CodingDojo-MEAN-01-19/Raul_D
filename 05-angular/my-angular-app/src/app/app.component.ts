import { Component } from '@angular/core';
import { Book } from './models';
import { NgForm, FormsModule } from '@angular/forms';
//without barralling
// import { Book } from './models/book.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title is the attribute and mean is the value.
  title = 'mean';
  book = new Book();
  books: Book[] = []

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log("I'm clicking the button.", this.book);

    this.books.push(this.book);
    this.book = new Book();

    console.log('books ', this.books);

    form.reset();
  }
}
