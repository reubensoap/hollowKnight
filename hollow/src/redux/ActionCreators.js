import * as ActionTypes from './ActionTypes';
import { BASE_URL, getCurrentUser } from '../Utils/APIUtil';

export const fetchPlayer = () => (dispatch) => {
    return getCurrentUser()
    .then(holder => dispatch(addPlayer(holder)))
    .catch(cds => {console.log(cds.message)});
}

export const addPlayer = (holder) => ({
    type:ActionTypes.ADD_PLAYER,
    payload: holder
});

export const logout = (value) => ({
    type: ActionTypes.LOGOUT,
    payload: value
});

export const authentication = (values) => ({
    type: ActionTypes.AUTHEN,
    payload: values
});

export const removeAccount = () => ({
    type: ActionTypes.REMOVE_ACCOUNT
});
