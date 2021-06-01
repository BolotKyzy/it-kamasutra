import React from "react";
import { NavLink } from "react-router-dom";
import s from './Users.module.css';
import * as axios from 'axios';
import { usersAPI } from "../../api";


const Users = (props) => {

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                        <div className={s.header}>
                            <div className={s.info_0}>
                                <div>
                                    <NavLink to = {'profile/' + user.id}>
                                    <img className={s.user_img} src={ user.photos.small != null ? user.photos.small : "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg"} alt="User"/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed ? <button
                                        disabled = {props.followingInProgress}
                                            className={s.folllowed_btn}
                                            onClick={() => {
                                                props.unfollow(user.id)

                                            }}>
                                            Unfollow</button> :
                                        <button
                                            disabled = {props.followingInProgress}
                                            className={s.folllowed_btn}
                                            onClick={() => {
                                                props.follow(user.id)

                                            }}>
                                            Follow
                                        </button>}
                                </div>
                            </div>
                            <div className={s.info}>
                                <div className={s.info_1}>
                                    <h3>{user.name}</h3>
                                    <p>{user.status}</p>
                                </div>
                                <div className={s.info_2}>
                                    <h3>{"user.location.city"}</h3>
                                    <h3>{"user.location.country"}</h3>

                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>

    )
}
export default Users;