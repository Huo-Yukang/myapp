import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  private uname: string;
  private password: string;

  constructor(private router: Router) { }

  ngOnInit() { // 组件被创建
  }
  login(un: string, up: string) { // 登录跳转页面
    this.uname = un ;
    this.password = up;
    if (this.uname === 'admin' && this.password === '123456') {
      this.router.navigateByUrl('/index/choose');
    } else if (this.uname === 'admin' && this.password === '1234567'){
      this.router.navigateByUrl('/index/managerment');
    }else {
      alert('用户名或密码错误');
    }
  }
  register(){
    this.router.navigateByUrl('/register');
  }
  administerlogin() { // 登录跳转页面
    this.router.navigateByUrl('/administer');
  }
}
