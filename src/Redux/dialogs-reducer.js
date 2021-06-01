const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const initialState = {
        messagesData: [
            {id: 1, message: "How is your it-kamasutra"},
            {id: 2, message: "Yoo"},
            {id: 3, message: "Let's go!"}
        ],
        newMessage: "bak",
        dialogsData: [
            {id: 1, name: "Kasiet"},
            {id: 2, name: "Aygerim"},
            {id: 3, name: "Baktygul"},
            {id: 4, name: "Dimych"},
            {id: 5, name: "Asel"}
        ]
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE:
            return {...state, newMessage: action.newMessage};
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessage,
            }
            return {...state,
                newMessage : "",
                messagesData : [...state.messagesData, newMessage]
            };
        default:
            return state;


    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessage = (text) =>
    ({ type: UPDATE_MESSAGE, newMessage: text});

