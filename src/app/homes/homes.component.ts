import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  

  constructor(private router:Router) { }

 login(){
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
