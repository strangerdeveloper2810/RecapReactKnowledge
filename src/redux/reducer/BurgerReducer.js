import { ADD_FOOD } from "../types/BurgerTypes";
const initialState = {
  burger: { salad: 1, beef: 1, cheese: 1 },
  menu: { salad: 10, beef: 55, cheese: 20 },
  total: 85,
};

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD: {
      const { propsBurger, amount } = action;
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;
      // Tính tổng tiền
      state.total += amount * state.menu[propsBurger];
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BurgerReducer;
