import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  authenticationService: any;
  constructor(private UserService: UserServiceService, private router:Router) { }
  userLogin(userLoginForm){
    this.UserService.userLogin(userLoginForm.value).pipe(map(resData => {
      return resData;
    })).subscribe(data => {
      this.UserService.selectedUser = data;
      localStorage.setItem('reqUserId', this.UserService.selectedUser.userId);
      if (this.authenticationService.authenticate(this.UserService.selectedUser.userEmail)) {

        // if (this.UserService.selectedUser.userRole === 'admin') {
        //   this.router.navigateByUrl('/admin');
        // } else if (this.UserService.selectedUser.userRole === 'librarian') {
        //   this.router.navigateByUrl('/librarian');
        // } else {
        //   this.router.navigateByUrl('/student');
        // }
        this.invalidLogin = false;
      } else {
        this.invalidLogin = true;
      }
    }, err => {
      this.UserService.printMessage = 'Invalid User and Password';
      setTimeout(() => {
        this.UserService.printMessage = '';
      }, 3000);
      this.router.navigateByUrl('/login');
    });
  }
  
  ngOnInit() {
    
  }

}
