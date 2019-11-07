import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  // print(form){
  //   this.router.navigateByUrl('/librarian')
  // }
  signup(){
    this.router.navigateByUrl('/register')
  }
  login(){
    this.router.navigateByUrl('/login')
  }

  ngOnInit() {
  }

}
