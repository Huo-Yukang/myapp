import { Injectable } from '@angular/core';
import {User} from './entity';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;
  constructor() { }
  setUser(teacher: User) {
    this.user = teacher;
  }
  getUser() {
    return this.user;
  }
}
