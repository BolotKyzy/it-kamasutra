import React, {Component} from "react";
import {connect} from "react-redux";
import {followApi, getUsersThunk, setUsersActionCreator, unfollowApi} from "../../Redux/users-reducer";
import Users from "./Users";

export class UsersContainer extends Component {

    componentDidMount() {
        
        // getUsers()
        // .then(data => {
        //     this.props.setUsers(data.items);


        // })
        this.props.getUsersThunk();
        
    }

    render() {


        return <Users users = {this.props.users}
        follow = {this.props.followApi}
        unfollow = {this.props.unfollowApi}
        setUsers = {this.props.setUsersActionCreator}
        followingInProgress = {this.props.followingInProgress}
        getUsersThunk = {this.props.getUsersThunk}
        />

    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        followingInProgress : state.usersPage.followingInProgress

    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) =>  {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         toggleIdFollowingProgress: (isFollow) => {
//             dispatch(toggleIdFollowingProgress(isFollow))
//         }
//     }
// }
export default connect(mapStateToProps, {getUsersThunk,followApi, unfollowApi })(UsersContainer);