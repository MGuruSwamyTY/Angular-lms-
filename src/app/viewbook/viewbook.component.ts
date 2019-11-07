import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private UserService:UserServiceService,private router:Router) { }
  returnBook(book){
    this.UserService.returnBook(book).subscribe(res => {
      this.UserService.showIssueBooks();
      this.UserService.printMessage = 'Book Returned successfully';
      this.router.navigateByUrl('/student');
   }, err => {
      console.log('book is pending');
   });
  }
  navigateStudentHome(){
    this.router.navigateByUrl('/student');
  }
  ngOnInit() {
    this.UserService.showIssueBooks();
  }

}
