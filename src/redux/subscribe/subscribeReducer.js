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
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case "SUBSCRIBE_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
