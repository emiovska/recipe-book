import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  private recipes:Recipe[] = [];

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

 // recipe = new Recipe('Name','Description','http://freedesignfile.com/upload/2015/09/Cute-smile-emoticon-icons-vectors-set-10.jpg');

  selectRecipe(recipe:Recipe){
    this.recipeService.selectRecipe(recipe);
  }
}
