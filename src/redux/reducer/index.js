const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTRY_SIDEBAR':
      return [...state, action.payload];
    case 'REMOVE_COUNTRY_SIDEBAR':
      return state.filter(curr => curr !== action.payload);
    default:
      return state;
  }
};

export default rootReducer;
