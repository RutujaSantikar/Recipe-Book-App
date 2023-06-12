import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes/recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipe!: Recipe;
  constructor(private recipeService : RecipeService) {
  
}
  // @Output() recipeSelected = new EventEmitter<void>();


  onSelected(){
  //  this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
