const initialState = {
  luckyNumber: 7
};
  
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LUCKY_NUMBER': {
      return {
        ...state,
        luckyNumber: action.luckyNumber
      }
    }
    default: {
      return state;
    }
  }
};
  