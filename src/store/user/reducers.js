import { VK_API_AUTH_SUCCESS } from "./actions";

const defaultState = {
    user: '',
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case VK_API_AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload.user.response[0],
            }
    }

    return state;
}