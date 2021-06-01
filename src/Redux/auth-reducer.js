import {authAPI} from '../api';
const SET_USER_DATA = "SET_USER_DATA";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: true

};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;


    }
}

export const setAuthUserData = (userId, email, login) => ({ type : SET_USER_DATA, data: {userId, email, login} });

export const getAuthThunk = () => {
    return (dispatch) => {
        authAPI.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                let {id,email, login} = res.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
       })

    }
}