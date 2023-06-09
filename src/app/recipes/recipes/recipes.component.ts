import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent {
  selectedRecipe!: Recipe;
  constructor(private recipeService: RecipeService) { }
  // ngOnInit() {
  //   this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
  //     this.selectedRecipe = recipe;
  //   });
  // }
}
