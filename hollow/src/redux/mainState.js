import * as ActionTypes from './ActionTypes';

export const MainState = (state = {
    isAuthenticated: false,
    playerStat: null
}, action) => {
    switch(action.type){
        case ActionTypes.AUTHEN:
            return {...state, isAuthenticated: action.payload}
        case ActionTypes.ADD_PLAYER:
            return{...state, playerStat: action.payload}
        case ActionTypes.LOGOUT:
            return {...state, isAuthenticated: action.payload, playerStat: null}
        case ActionTypes.REMOVE_ACCOUNT:
            return {...state, accountHolder: null}
        case ActionTypes.ADD_MASK:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_VESSEL:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_ESSENSE:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_NAIL:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_COLO:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_BOSS:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_DREAMER:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_EQUIP:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_NAIL_ART:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_SPELL:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_WARRIOR:
            return {...state, playerStat: action.payload}
        case ActionTypes.ADD_CHARM:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_MASK:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_VESSEL:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_ESSENSE:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_NAIL:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_COLO:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_BOSS:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_DREAMER:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_EQUIP:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_NAIL_ART:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_SPELL:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_WARRIOR:
            return {...state, playerStat: action.payload}
        case ActionTypes.SUB_CHARM:
            return {...state, playerStat: action.payload}
            default:
                return state;
    }
};