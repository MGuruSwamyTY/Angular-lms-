import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdata',
  templateUrl: './bookdata.component.html',
  styleUrls: ['./bookdata.component.css']
})
export class BookdataComponent implements OnInit {

  constructor(private UserService:UserServiceService, private router:Router) { }
  updateBook(book) {
    this.UserService.selectedBook = book;
    this.router.navigateByUrl('/updateBook');
  }

  deleteBook(book) {
    this.UserService.removeBook(book.bookId).subscribe(res => {
      this.UserService.getAllBook();
      this.router.navigateByUrl('/bookdata');
    }, err => {
      console.log('not deleted');
    });
  }

  librarianHomePage() {
    this.router.navigateByUrl('/librarian');
  }
  ngOnInit() {
    this.UserService.getAllBook();
  }

}
