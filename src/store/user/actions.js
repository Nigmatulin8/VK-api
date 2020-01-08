import {APP_ID, ACCESS_VALUES, API_VERSION, USER_FIELDS} from '../../config.js'

export const VK_API_AUTH_SUCCESS = 'VK_API_AUTH_SUCCESS';

export const vkAuth = () => {
    return dispatch => {
        new Promise(() => {
            VK.init({ apiId: APP_ID });

            VK.Auth.login(response => {
                if(response.session) {
                    VK.api('users.get', {"v":API_VERSION, 'name_case': 'nom', fields: USER_FIELDS}, response => {
                        dispatch({
                            type: VK_API_AUTH_SUCCESS,
                            payload: {
                                user: response,
                            }
                        })
                    });
                }

                else {
                    throw new Error('Auth error')
                }
            }, ACCESS_VALUES)
        })
    };
}
