const initialState = {
  burger: { salad: 1, beef: 1, cheese: 1 },
  menu: { salad: 10, beef: 55, cheese: 20 },
  total: 85,
};

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BurgerReducer;
