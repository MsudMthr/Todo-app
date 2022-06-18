const initialState = {
  isLoading: true,
  isLoggedIn: false,
  user: [],
  error: "",
};

export const subscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBSCRIBE_SUCCESS":
      return {
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
        ...state,
      };
    case "SUBSCRIBE_FAILURE":
      return {
        isLoading: false,
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
