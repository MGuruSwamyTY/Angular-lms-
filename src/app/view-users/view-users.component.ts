import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private UserService:UserServiceService,private router:Router) { }

  updateUser(user) {
    this.UserService.selectedUser = user;
    this.router.navigateByUrl('/updateUser');
  }
  removeUser(user) {
    console.log(user);
    this.UserService.removeUser(user.userId).subscribe(res => {
      this.UserService.getAllUsers();
      this.router.navigateByUrl('/viewusers');
      console.log('deleted');
    }, err => {
        console.log(err);
    });
 }
  ngOnInit() {
  }

}
