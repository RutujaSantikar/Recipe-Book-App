import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes/recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipe!: Recipe;

  @Input() index!: number;
  
  
}
