import {Ingredient} from "../recipes/ingredient";

export class ShoppingListService {

  items: Ingredient[] = [];

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

}
