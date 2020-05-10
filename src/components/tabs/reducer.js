

const initialState = {
    tabs:[]
};

export default (state = initialState, action) => {
const newState = { ...state };
switch (action.type) {
    case "closeTabs":
        newState.tabs = action.payload;
        break;
    case "addTabs":
        newState.tabs = action.payload;
        break;
    default:
    break;
}
return newState;
};
