import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private Recipes: Recipe[] = [
        new Recipe('Tandoori Chicken', 'Recipe of delicious tandoori chicken', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Chicken_Inasal.JPG', [
            new Ingredient('Chicken', 2),
            new Ingredient('Chillies', 3)
        ]),
        new Recipe('Hyderabadi Biryani', 'Recipe of authentic Hyderabadi Biryani', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Chicken_DumBiryani.JPG', [
            new Ingredient('Mutton', 3),
            new Ingredient('Basmati Rice', 4)
        ]),
        new Recipe('Upma', 'Delicious south indian style upma', 'https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Pooja_Thakur/Tomato_Upma_Recipe.jpg', [
            new Ingredient('Semolina', 1),
            new Ingredient('Cashew', 5)
        ])
    ];

    getRecipes() {
        return this.Recipes.slice();
    }
    /**
     *
     */
    constructor(private shoppingListService: ShoppingListService) {

    }
    addIngredientstoShopList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}
