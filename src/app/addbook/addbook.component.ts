import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private UserService:UserServiceService, private router:Router) { }
  addBook(addbookform){
    this.UserService.addBook(addbookform.value).subscribe(res => {
      addbookform.reset();
      this.router.navigateByUrl('/books');
     }, err => {
        console.log('book not added');
     });
  }
  librarianHomePage() {
    this.router.navigateByUrl('/librarian');
  }
  ngOnInit() {
  }

}
