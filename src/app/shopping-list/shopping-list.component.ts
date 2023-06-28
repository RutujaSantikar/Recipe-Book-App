import { Component , OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit , OnDestroy{

  ingredients!: Ingredient[];
  private igChangeSub!: Subscription;
  constructor(private slService:shoppingListService){}
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub=this.slService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  // onIngredientAdded(ingredient : Ingredient){
  //  this.ingredients.push(ingredient);
  // }
}
