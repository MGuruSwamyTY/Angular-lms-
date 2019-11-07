import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private UserService:UserServiceService,private router:Router) { }
  updateUser(registerform){
    this.UserService.updateUser(registerform.value).subscribe(res => {
      console.log('updated..');
      registerform.reset();
      this.router.navigateByUrl('/viewusers');
   }, err => {
      console.log('not updated..');
   });
  }
  cancelUpdate() {
    this.router.navigateByUrl('/viewusers');
  }
  
  ngOnInit() {

  }
}

