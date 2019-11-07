import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  UserService: any;

  constructor(private router: Router, private libraryService: UserServiceService) { }
  addBook(){
    this.router.navigateByUrl("/addbooks")
  }
  viewBooks() {
    this.UserService.getAllBook();
    console.log(this.UserService.books);
    this.router.navigateByUrl('/bookdata');
  }

  books(){
    this.router.navigateByUrl("/bookdata")
  }
  acceptBookRequest(uid , bid) {
    this.UserService.accepBookIssueRequest(uid, bid).subscribe(res => {
    this.UserService.studentBookRequest.userId = '';
    this.UserService.studentBookRequest.bookId = '';
    this.UserService.printMessage = 'Request accepted';
    this.router.navigateByUrl( '/student');
    }, err => {
     console.log(err);
    });
  }

  declineBookReq(userId, bookId) {
    this.UserService.studentBookRequest.userId = '';
    this.UserService.studentBookRequest.bookId = '';
    this.UserService.printMessage = 'Request Declined';
    this.router.navigateByUrl( '/student');
  }
  ngOnInit() {
  }

}
