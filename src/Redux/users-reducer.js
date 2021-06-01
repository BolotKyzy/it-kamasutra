import {usersAPI} from '../api';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


const initialState = { users: [] ,
    followingInProgress: false
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(action.userId === user.id) {
                        return {...user, followed : true}
                    }
                    return user;
                    }
                )

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                        if(action.userId === user.id) {
                            return {...user, followed : false}
                        }
                        return user;

                    }
                )
            }
        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users] };
            case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {...state, followingInProgress: action.isFetching}
        default:
            return state;


    }
}



export const followActionCreator = (userId) => ({ type : FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type : UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type : SET_USERS, users });
export const toggleIdFollowingProgress = (isFetching) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching}) 




export const getUsersThunk = () => {
return (dispatch) => {
    usersAPI.getUsers()
    .then(data => {
        dispatch(setUsersActionCreator(data.items));

    })

}    }


export const followApi = (userId) => {
    return (dispatch) => {
        dispatch(toggleIdFollowingProgress(true));

        usersAPI.follow(userId)

        .then(res => {
            if(res.data.resultCode == 0) {
                dispatch(followActionCreator(userId))
            }
            dispatch(toggleIdFollowingProgress(false));
        })

    }
}

export const unfollowApi = (userId) => {
    return (dispatch) => {
        dispatch(toggleIdFollowingProgress(true));

        usersAPI.unfollow(userId)

        .then(res => {
            if(res.data.resultCode == 0) {
                dispatch(unfollowActionCreator(userId))
            }
            dispatch(toggleIdFollowingProgress(false));
        })

    }
}

