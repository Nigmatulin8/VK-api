import React from 'react';
import { connect } from 'react-redux';

import BodyComponent from '../components/bodyComponent.jsx';

class BodyContainer extends React.Component {
    render() {
        if(this.props.user) {
            return <BodyComponent user={this.props.nav ? this.props.nav : this.props.user} />
        }
        else return <div>wait</div>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        nav: state.nav.user,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);