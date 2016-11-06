import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../recipes/ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit{

  private items:Ingredient[] = [];
  constructor(private shoppingListService:ShoppingListService) {}

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
  }



}
