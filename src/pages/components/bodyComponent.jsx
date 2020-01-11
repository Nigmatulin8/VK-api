import React from 'react';
import styles from '../../styles/module-styles/body.module.css';

import User from './body/user.jsx';
import Friends from './body/friends.jsx';
import Groups from './body/groups.jsx';
import Wall from './body/wall.jsx';

export default class extends React.Component {
    render() {
        if(this.props.type.friends && this.props.user.length !== 0) {
            return <Friends user={this.props.user} />
        }
        else if(this.props.type.groups && this.props.user.items.length !== 0) {
            return <Groups user={this.props.user} />
        }
        else if(this.props.type.wall && this.props.user.items.length !== 0) {
            return <Wall user={this.props.user} />
        }
        else if ((this.props.user && this.props.type === '') || this.props.type.user){
            return <User user={this.props.user} />
        }
        else {
            return (
                <div className={styles.body__err__page}>
                    <div className={styles.body__no__information}>
                        <div className={styles.body__no__information__icon} >
                            <img src="dist/img/error_icon.png" alt="Error icon" />
                        </div>
                        
                        <div className={styles.body__no__information__text}>
                            Unable to retrieve information from the page. Please try refreshing the page or come back later.
                        </div>
                    </div>

                    <img src="dist/img/sad_cat.png" alt="Error icon"/>
                </div>
            )
        }
    }
}
