import React from 'react';
import state, {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text));
//                     }
//                     return <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         postsData={state.profilePage.postsData}
//                         newPostText={state.profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }
const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText : (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }

    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;