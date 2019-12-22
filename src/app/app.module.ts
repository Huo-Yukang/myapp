import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChooseComponent } from './choose/choose.component';
import { RegisterComponent } from './register/register.component';
import { AdministerComponent } from './administer/administer.component';
import { ManagermentComponent } from './managerment/managerment.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

import { AddFoodComponent } from './add-food/add-food.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    ChooseComponent,
    RegisterComponent,
    AdministerComponent,
    ManagermentComponent,
    UpdateFoodComponent,
    AddFoodComponent
  ],
  imports: [ // 当前项目依赖的所有模块
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // 如果要引入双向绑定，则需要引入FormModule
    FormsModule,
    ReactiveFormsModule
  ],
  // 定义服务
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy, }],
  // 默认启动哪个组件
  bootstrap: [AppComponent]
})
export class AppModule { }
