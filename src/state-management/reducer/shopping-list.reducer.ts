import { Ingredient } from 'src/models/ingredient.model';
import * as shoppingListActions from '../actions/shopping-list.actions';

import { createReducer , on} from '@ngrx/store';

const initialState: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
];


const _shoppingListReducer = createReducer(initialState,
    on(shoppingListActions.addIngredient, (state, ingredient) => [...state, ingredient]),
    on(shoppingListActions.updateIngredient, (state,{index, newIngredient}) => [...state.map((item,itemIndex) => {
        if(itemIndex === index) return newIngredient;
        else return item
    })]),
    on(shoppingListActions.deleteIngredient, (state,{index }) => [...state.filter((item,itemIndex) => itemIndex != index)]
)
);

export function reducer(state: Ingredient[], action) {
    return _shoppingListReducer(state, action);
}
