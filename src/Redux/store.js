import React from 'react';
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you", likesCount: 20},
                {id: 2, message: "It is my first post", likesCount: 45},
                {id: 3, message: "Wow, cool! ", likesCount: 61}
            ],
            newPostText: "it-camasutra.com"
        },

        dialogsPage: {
            messagesData: [
                {id: 1, message: "How is your it-kamasutra"},
                {id: 2, message: "Yoo"},
                {id: 3, message: "Let's go!"}
            ],
            newMessage: "",
            dialogsData: [
                {id: 1, name: "Kasiet"},
                {id: 2, name: "Aygerim"},
                {id: 3, name: "Baktygul"},
                {id: 4, name: "Dimych"},
                {id: 5, name: "Asel"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log("Rerender");
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this.rerenderEntireTree(this._state);
    }
}


export default store;

