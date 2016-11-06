import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent {

  @Input() selectedRecipe:Recipe;

}
