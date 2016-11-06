import {Component, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent {

  @Output() recipeSelected = new EventEmitter();

  recipe = new Recipe('Name','Description','http://freedesignfile.com/upload/2015/09/Cute-smile-emoticon-icons-vectors-set-10.jpg');

  selectRecipe(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
