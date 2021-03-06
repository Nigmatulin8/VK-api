import { API_VERSION, USER_FIELDS, FRIENDS_FIELDS, GROUPS_FIELDS } from '../../config.js'

export const VK_API_GET_USER_SUCCESS = 'VK_API_GET_USER_SUCCESS';
export const VK_API_FRIENDS_GET_SUCCESS = 'VK_API_FRIENDS_GET_SUCCESS';
export const VK_API_GROUPS_GET_SUCCESS = 'VK_API_GROUPS_GET_SUCCESS';
export const VK_API_WALL_GET_SUCCESS = 'VK_API_WALL_GET_SUCCESS';
export const VK_API_DOC_GET_SUCCESS = 'VK_API_DOC_GET_SUCCESS';

export const getUser = () => {
    return dispatch => {
        new Promise(() => {
            VK.api('users.get', { "v":API_VERSION, 'name_case': 'nom', fields: USER_FIELDS }, response => {
                dispatch({
                    type: VK_API_GET_USER_SUCCESS,
                    payload: {
                        user: response,
                        type: {
                            user: true,
                            friends: false,
                            groups: false,
                            wall: false,
                            docs: false,
                        }
                    }
                })
            });
        })
    }
}

export const getFriends = () => {
    return dispatch => {
        new Promise(() => {
            VK.api('friends.get', { "v":API_VERSION, 'name_case': 'nom', 'order': 'name', fields: FRIENDS_FIELDS }, response => {
                dispatch({
                    type: VK_API_FRIENDS_GET_SUCCESS,
                    payload: {
                        user: response,
                        type: {
                            usr: false,
                            friends: true,
                            groups: false,
                            wall: false,
                            docs: false,
                        }
                    }
                })
            });
        })
    }
}

export const getGroups = () => {
    return dispatch => {
        new Promise(() => {
            VK.api('groups.get', { "v":API_VERSION, fields: GROUPS_FIELDS, extended: 1 }, response => {
                dispatch({
                    type: VK_API_GROUPS_GET_SUCCESS,
                    payload: {
                        user: response.response,
                        type: {
                            user: false,
                            friends: false,
                            groups: true,
                            wall: false,
                            docs: false,
                        }
                    }
                })
            });
        })
    }
}

export const getWall = () => {
    return dispatch => {
        new Promise(() => {
            VK.api('wall.get', { "v":API_VERSION, extended: 1 }, response => {
                dispatch({
                    type: VK_API_WALL_GET_SUCCESS,
                    payload: {
                        user: response.response,
                        type: {
                            user: false,
                            friends: false,
                            groups: false,
                            wall: true,
                            docs: false,
                        }
                    }
                })
            });
        })
    }
}

export const getDoc = () => {
    return dispatch => {
        new Promise(() => {
            VK.api('docs.get', { "v":API_VERSION }, response => {
                dispatch({
                    type: VK_API_DOC_GET_SUCCESS,
                    payload: {
                        user: response.response,
                        type: {
                            user: false,
                            friends: false,
                            groups: false,
                            wall: false,
                            docs: true,
                        }
                    }
                })
            });
        })
    }
}
