import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    if(!props.profile) {
        return <div>Loading...</div>

    }
    return (
        <div>
            <div>
                <img
                    src={props.profile.photos.small}/>
            </div>
            <div>
                <img
                    src={props.profile.photos.large}/>
                    <div className= {s.descriptionBlock }>{props.profile.fullName}</div>

                <div className= {s.descriptionBlock }>{props.profile.aboutMe}</div>
                <div className= {s.descriptionBlock }>{props.profile.lookingForAJobDescription}</div>

                
            </div>
        </div>
    )
        ;
}
export default ProfileInfo;