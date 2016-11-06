import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit{

  selectedRecipe:Recipe;

  constructor(private recipeService:RecipeService, private shoppingListService:ShoppingListService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      data=> this.selectedRecipe = data
    );
  }

  addToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

}
