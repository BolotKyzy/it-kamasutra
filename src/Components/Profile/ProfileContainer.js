import React, {Component,} from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile, getProfileThunk} from '../../Redux/profile-reducer'
import { withRouter } from 'react-router';

class ProfileContainer extends Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getProfileThunk(userId);

    }
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})



let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfileThunk})(withUrlDataContainerComponent);

