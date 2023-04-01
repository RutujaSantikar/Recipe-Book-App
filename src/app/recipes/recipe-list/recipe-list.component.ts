import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test recipe', 'this is simply test','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505')
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
}
