import { createStore, type Action } from "redux";

export type State = {
    happyCount: number;
    sadCount: number;
};
const initialState: State = {
    happyCount: 0,
    sadCount: 0
};



 function reducer(currentState: State = initialState, action: Action): State
{
    if (action.type === "HAPPY_BUTTON_CLICKED")
    {
        return {
            ...currentState,
            happyCount: currentState.happyCount + 1
        };
    }
    if (action.type === "SAD_BUTTON_CLICKED")
    {
        return {
            ...currentState,
            sadCount: currentState.sadCount + 1
        };
    }
    return currentState;
}

const store = createStore(reducer);
export default store;
