import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class  shoppingListService{
    ingredientChanged =  new Subject<Ingredient[]>();
  private ingredients:Ingredient[]=[
     new Ingredient('Apples', 5),
     new Ingredient('Bananas', 4),
     new Ingredient('Watermelons', 2)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);    
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());

    }
}