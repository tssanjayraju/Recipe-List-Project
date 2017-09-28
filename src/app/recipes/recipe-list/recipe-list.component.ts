import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Tandoori Chicken', 'Recipe of delicious tandoori chicken', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Chicken_Inasal.JPG'),
  new Recipe('Hyderabadi Biryani', 'Recipe of authentic Hyderabadi Biryani', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Chicken_DumBiryani.JPG'),
  new Recipe('Upma','Deliciour upma by Uma','https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Pooja_Thakur/Tomato_Upma_Recipe.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
