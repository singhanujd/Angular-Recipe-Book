import { createAction,props } from '@ngrx/store';
import { Ingredient } from 'src/models/ingredient.model';

export const addIngredient = createAction("[SHOPPING LIST] ADD INGREDIENT",props<Ingredient>());
export const addIngredients = createAction("[SHOPPING LIST] ADD INGREDIENTS",props<{ingredients: Ingredient[]}>());
export const updateIngredient = createAction("[SHOPPING LIST] UPDATE INGREDIENT",props<{index: number, newIngredient: Ingredient}>());
export const deleteIngredient = createAction("[SHOPPING LIST] DELETE INGREDIENT",props<{index : number}>());
