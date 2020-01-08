import React from 'react';
import { connect } from 'react-redux';

import NavComponent from '../components/navComponent.jsx';
import { getUser, getFriends, getGroups, getWall } from '../../store/nav/actions.js';

class UsersContainer extends React.Component {
    state = {
        user: this.props.user
    }

    render() {
        return <NavComponent 
                    getUser={this.props.getUser }
                    getFriends={this.props.getFriends}
                    getGroups={this.props.getGroups}
                    getWall={this.props.getWall}
                />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = {
    getUser,
    getFriends,
    getGroups,
    getWall,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);