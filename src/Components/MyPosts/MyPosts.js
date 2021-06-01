import React from 'react';
import Posts from "./Posts/Posts";
import s from './MyPosts.module.css';
import state, {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    const OnAddPost = () => {
        props.addPost();
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange = {onPostChange}
                        ref = {newPostElement}
                        value = {props.profilePage.newPostText} />
                </div>
                <button  onClick = {OnAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {props.profilePage.postsData
                    .map(post => <Posts  message={post.message} likesCount={post.likesCount}/>
                )}

            </div>

        </div>
    );
}
export default MyPosts;