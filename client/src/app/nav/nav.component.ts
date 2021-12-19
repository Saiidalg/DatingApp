import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accoutService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.accoutService.login(this.model).subscribe(Response => {
      this.router.navigateByUrl('/members');
    }, error => {
      console.log(error);
    
    })
  }

  logout(){
    this.accoutService.logout();
    this.router.navigateByUrl('/');
  }

}
