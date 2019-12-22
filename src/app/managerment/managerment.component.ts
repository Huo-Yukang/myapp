import { Component, OnInit } from '@angular/core';
import { Food } from '../entity';
import {TakeoutfoodService} from '../takeoutfood.service';

@Component({
  selector: 'app-managerment',
  templateUrl: './managerment.component.html',
  styleUrls: ['./managerment.component.css']
})
export class ManagermentComponent implements OnInit {
  foods: Food[];
  private n: number;
  constructor(private foodService: TakeoutfoodService) { }

  ngOnInit() {
    this.getFoods();
  }
  getFoods(): void {
    this.foodService.getFoods ()
      .subscribe(res => this.foods = res);
  }
}
