const initialValue = {
  count: 1,
};

const AppReducer = (state = initialValue, action) => {
  switch (action.type) {
    case " ": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default AppReducer;
