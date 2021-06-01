import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    let onSendMessage = () => {
        props.sendMessage();

}
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { props.dialogsPage.dialogsData.map(dialog => <DialogsItem id = {dialog.id} name = { dialog.name }/>
                )}

            </div>

            <div className={s.messages}>
                <div>
                    { props.dialogsPage.messagesData.map( mesage => <Message message = {mesage.message}/>
                    )}
                </div>

                <div>
                    <textarea
                        onChange={ onNewMessageChange }
                        value={ props.dialogsPage.newMessage }
                    />
                </div>
                <div>
                    <button onClick={onSendMessage}>send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;