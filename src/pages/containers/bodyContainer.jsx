import React from 'react';
import { connect } from 'react-redux';

import BodyComponent from '../components/bodyComponent.jsx';
import Preloader from '../components/preloaders/simplePreloader.jsx';

class BodyContainer extends React.Component {
    render() {
        if(this.props.user) {
            return <BodyComponent user={this.props.nav ? this.props.nav : this.props.user} type={this.props.type} />
        }
        else return <Preloader />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        nav: state.nav.user,
        type: state.nav.type,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);