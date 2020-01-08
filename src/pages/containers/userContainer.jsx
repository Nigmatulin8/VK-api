import React from 'react';
import { connect } from 'react-redux';

import UserComponent from '../components/userComponent.jsx';
import { vkAuth } from '../../store/user/actions.js';

class UsersContainer extends React.Component {
    state = {
        user: this.props.user
    }
    componentDidMount() {
        this.props.vkAuth()
    }

    render() {
        if(this.props.user) {
            return <UserComponent user={this.props.user} />
        }
        else {
            return <div> Wait...</div>
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,

    }
}

const mapDispatchToProps = {
    vkAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);