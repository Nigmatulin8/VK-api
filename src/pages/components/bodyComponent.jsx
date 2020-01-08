import React from 'react';
//import styles from '../../styles/module-styles/body.module.css';

import User from './body/user.jsx';
import Friends from './body/friends.jsx';
import Groups from './body/groups.jsx';
import Wall from './body/wall.jsx';

export default class extends React.Component {
    render() {
        if(this.props.user.count && Array.isArray(this.props.user.items) && !this.props.user.profiles ) {
            return <Groups user={this.props.user} />
        }
        else if(Array.isArray(this.props.user)) {
            return <Friends user={this.props.user} />
        }
        else if(this.props.user.profiles) {
            return <Wall user={this.props.user} />
        }
        else {
            return <User user={this.props.user} />
        }
    }
}
