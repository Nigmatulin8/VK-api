import React from 'react';
import styles from '../../styles/module-styles/nav.module.css';

export default class extends React.Component {
  render() {
    
    return (
      <div className={styles.nav__main}>
          <button className={styles.nav__action__btn} onClick={this.props.getUser}>About</button>
         <button className={styles.nav__action__btn} onClick={this.props.getFriends}>Friends</button>
         <button className={styles.nav__action__btn} onClick={this.props.getGroups}>Groups</button>
         <button className={styles.nav__action__btn} onClick={this.props.getWall}>Wall</button>
      </div>
    )
  }
}
