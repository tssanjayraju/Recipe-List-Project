import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Chicken', 2),
  new Ingredient('Tomatoes', 7),
  new Ingredient('Yoghurt', 1)
];
  constructor() { }

  ngOnInit() {
  }

}
