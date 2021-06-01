import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessage} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     let onSendMessageClick = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }
//                     let onNewMessageChange = (text) => {
//                         store.dispatch(updateMessage(text));
//                     }
//                     return <Dialogs sendMessage={onSendMessageClick}
//                                     updateNewMessageText={onNewMessageChange}
//                                     dialogsData={state.dialogsPage.dialogsData}
//                                     messagesData={state.dialogsPage.messagesData}
//                                     newMessageText={state.dialogsPage.newMessage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () =>  {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateMessage(text))
        }
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;