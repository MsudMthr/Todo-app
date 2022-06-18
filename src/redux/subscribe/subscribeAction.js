
export const subscribeSuccess = (user) => {
  return { type: "SUBSCRIBE_SUCCESS", payload: user };
};
export const subscribeFailure = (error) => {
  return { type: "SUBSCRIBE_FAILURE", payload: error };
};
