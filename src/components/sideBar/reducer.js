

const initialState = {
     login:"Login",

};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "tabs":
        newState.tabs = action.payLoad;
      break;
    default:
      break;

  }
  return newState;
};
