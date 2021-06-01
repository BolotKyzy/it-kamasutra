import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import {Route, BrowserRouter } from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Friends/UsersContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';


function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Menu/>
                <div className='app-wrapper-content'>
                    <Route exact path= '/dialogs' render = { () => <DialogsContainer/> }/>
                    <Route path= '/profile/:userId?' render = { () => <ProfileContainer/> }/>
                    <Route path= '/music' crender = { () => <Music/> }/>
                    <Route path= '/setting' render = { () => <Setting/> }/>
                    <Route path= '/news' render = { () => <News/> }/>
                    <Route path= '/users' render = { () => <UsersContainer/> }/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
