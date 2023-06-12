import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipes/recipes.model";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
     private recipes:Recipe[]=[
         new Recipe('Fries recipe',
             'this is simply test',
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqa35p6OUhHCj7O4WxKlCtrLuxADXUsBZNA&usqp=CAU',
             [
                 new Ingredient('Meat', 1),
                  new Ingredient('Fries', 20),
                 
            ]
         ),
         new Recipe('Pasta recipe', 'this is bitter test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505',
              [
                 new Ingredient('Pasta', 10),
                  new Ingredient('tomato',5),
                 
            ]
         ),
         new Recipe('A pizza recipe', 'this is simply test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg',
            [
                 new Ingredient('Base', 5),
                  new Ingredient('paneer',5),
                 
            ]
         ),
         new Recipe('sandwich recipe', 'this is bitter test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYXIGAjpRW121MWA_ugNQc3zsckceBH5kkw&usqp=CAU',
           [
                 new Ingredient('Bread', 10),
                  new Ingredient('corn',5),
                 
            ]
         )

    ];
    constructor(private slService : shoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}