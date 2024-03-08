const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return {
          ...state,
          userData: action.payload,
          loading: false,
        };
      case 'LOGOUT':
        localStorage.clear();
        return {
          ...state,
          userData: {},
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  