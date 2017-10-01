import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
recipeTab = true;
shoppingListTab = false;

  onToggeledTab(event: {selectedTab: string}){
if (event.selectedTab === 'Recipes'){
  this.shoppingListTab = false;
  this.recipeTab = true;
}
  else if(event.selectedTab === 'ShoppingList'){
    this.recipeTab = false;
    this.shoppingListTab = true;
  }
}
}
