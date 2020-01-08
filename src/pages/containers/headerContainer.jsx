import React from 'react';
//import { connect } from 'react-redux';

import HeaderComponent from '../components/headerComponent.jsx';
//import { vkAuth } from '../../store/user/actions.js';

export default class extends React.Component {
    render() {
        return <HeaderComponent user={this.props.user} />
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.user.user,

//     }
// }

// const mapDispatchToProps = {
//     vkAuth
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);