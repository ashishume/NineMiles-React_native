import { ADD_PLACE } from "../actions/actionTypes";

const initialState = {
    users:[]
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                
            };
        default:
            return state;
    }
}

export default reducer;