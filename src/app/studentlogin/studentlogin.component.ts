import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  router: any;

  constructor() { }
  login(form){
    this.router.navigateByUrl('/student')
  }
  ngOnInit() {
  }

}
