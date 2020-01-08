import React from 'react';
import dayjs from 'dayjs';

import styles from '../../styles/module-styles/user.module.css';

export default class extends React.Component {
  render() {
    let lastSeen = dayjs.unix(this.props.user.last_seen.time).format('YYYY-MM-DD HH:mm:ss')

    return (
      <div className={styles.user__main}>
        <img className={styles.user__photo} src={this.props.user.photo_max_orig} alt="User photo" />

        <div className={styles.user__online}> 
          <div className={this.props.user.online ? styles.user__online__dot : styles.user__offline__dot}> 
          </div>
            {this.props.user.online ? 'Online' : 'Offline'} 
        </div>
        <div className={styles.user__last__seen}>
          <div><strong>Last Seen: </strong></div> <div>{lastSeen}</div>
        </div>
      </div>
    )
  }
}
