import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
 

  constructor(private UserService:UserServiceService,private router:Router) { }
  cancelBookUpdate() {
    this.router.navigateByUrl('/bookdata');
  }

  updateBook(bookform) {
    console.log(bookform.value);
    this.UserService.updateBook(bookform.value).subscribe(res => {
      this.router.navigateByUrl('/bookdata');
    }, err => {
       console.log(err);
    });
  }
  ngOnInit() {
  }

}
