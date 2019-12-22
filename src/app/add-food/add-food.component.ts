import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../entity';
import {TakeoutfoodService} from '../takeoutfood.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  @Input() food: Food;

  constructor(
    private route: ActivatedRoute,
    private takeoutfoodService: TakeoutfoodService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.takeoutfoodService.getFood(id)
      .subscribe(res => this.food = res);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.takeoutfoodService.updateFood(this.food)
      .subscribe((res) => {alert(res.message); this.goBack(); });
  }
}
