import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private uname: string;
  private password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(un: string, up: string){
    this.uname = un ;
    this.password = up;
    this.router.navigateByUrl('');
    }
  back(){
    this.router.navigateByUrl('');
  }
}
