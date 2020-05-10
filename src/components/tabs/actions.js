

export const closetabs = (tabs) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "closeTabs",
        payload:tabs
    })
};
export const addTabs = (tabs) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "addTabs",
        payload:tabs
    })
};