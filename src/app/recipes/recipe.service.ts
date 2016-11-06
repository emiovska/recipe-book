import {Recipe} from "./recipe";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "./ingredient";

export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Name', 'Description', 'http://freedesignfile.com/upload/2015/09/Cute-smile-emoticon-icons-vectors-set-10.jpg', [
      new Ingredient("Water", 5),
      new Ingredient("Egg", 10)
    ]),
    new Recipe('Fruit', 'Description', 'http://www.foodnavigator.com/var/plain_site/storage/images/publications/food-beverage-nutrition/foodnavigator.com/science/big-data-exhaustive-review-pulls-together-evidence-on-food-groups-and-diet-related-disease/9537720-1-eng-GB/Big-data-Exhaustive-review-pulls-together-evidence-on-food-groups-and-diet-related-disease.jpg', []),
    new Recipe('Sandwich', 'Description', 'http://kingofwallpapers.com/food/food-011.jpg', [
      new Ingredient("Solt", 50),
      new Ingredient("Sugar", 100)
    ]),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
