import { 
    VK_API_GET_USER_SUCCESS, 
    VK_API_FRIENDS_GET_SUCCESS, 
    VK_API_GROUPS_GET_SUCCESS,
    VK_API_WALL_GET_SUCCESS,
} from "./actions";

const defaultState = {
    user: '',
};

export const navReducer = (state = defaultState, action) => {
    switch (action.type) {
        case VK_API_GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user.response[0],
            }

        case VK_API_FRIENDS_GET_SUCCESS: 
            return {
                ...state,
                user: action.payload.user.response.items
            }

        case VK_API_GROUPS_GET_SUCCESS: 
            return {
                ...state,
                user: action.payload.user
            }

        case VK_API_WALL_GET_SUCCESS: 
            return {
                ...state,
                user: action.payload.user
            }
    }

    return state;
}