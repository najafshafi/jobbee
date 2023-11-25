import * as actionTypes from '../store/actions';

const initialState = {
    IsInitiated: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.INITIATED:
            return {
                ...state,
                IsInitiated: action.IsInitiated,
            };
        default:
            return state;
    }
};

export default reducer;