import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-administer',
  templateUrl: './administer.component.html',
  styleUrls: ['./administer.component.css']
})
export class AdministerComponent implements OnInit {
  private uname: string;
  private password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(un: string, up: string) { // 登录跳转页面
    this.uname = un ;
    this.password = up;
    if (this.uname === 'admin' && this.password === '123456') {
      this.router.navigateByUrl('/index/managerment');
    } else {
      alert('用户名或密码错误');
    }
  }
  back(){
    this.router.navigateByUrl('');
  }
}
