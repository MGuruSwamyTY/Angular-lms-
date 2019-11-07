import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }
  addUsers(){
   this.router.navigateByUrl('/adduser')
  }
  viewsUsers(){
    this.router.navigateByUrl('/viewusers');
  }
  viewbooks(){
    this.router.navigateByUrl('/viewbook');
  }
  // updateUsers(){
  //   this.router.navigateByUrl('/updatebook');
  // }
  // DeleteUsers(){
  //   this.router.navigateByUrl('/deleteuser');
  // }

  ngOnInit() {
  }

}
