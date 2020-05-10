

const initialState = {
  currentopenview:"current Open View"
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "LOGGED_IN":
      console.log("")
      break;
    default:
      break;

  }
  return newState;
};
