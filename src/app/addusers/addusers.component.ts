import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  constructor(private UserService:UserServiceService, private router:Router) { }

  addUser(form){
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
