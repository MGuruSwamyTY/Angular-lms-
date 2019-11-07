import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private UserService:UserServiceService,private router:Router) { }

  print(form){
    this.UserService.addUser(form.value).subscribe(res => {
      form.reset();
        this.router.navigateByUrl('/viewusers');
      }, err => {
        console.log('user not registered.');
      });
  }
  ngOnInit() {
  }

}
