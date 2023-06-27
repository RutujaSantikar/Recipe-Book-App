import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes!: Recipe[];
  index!: number;
  constructor(private RecipeService: RecipeService,
    private router: Router,
              private route:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
    
  }
  onNewRecipe() {
    this.router.navigate(['new'], {
     relativeTo:this.route
    }) 
  }
}
