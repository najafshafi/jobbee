import * as actionTypes from '../store/actions';

const initialState = {
    isLogin: false,
    tokens: {},
    user: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOGOUT:
            return {
                ...initialState,
            };
        case actionTypes.USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.LOGIN:
            return {
                ...state,
                tokens: action.tokens,
                user: action.user,
                isLogin: action.isLogin
            };

        default:
            return state;
    }
};

export default reducer;