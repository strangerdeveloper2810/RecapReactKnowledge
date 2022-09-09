import {ADD_FOOD} from "../types/BurgerTypes"
export const addFoodAction = (propsBurger,amount) => {
    return {
        type: ADD_FOOD,
        propsBurger,
        amount
    }
}
