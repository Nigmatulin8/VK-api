import React from 'react';
import dayjs from 'dayjs';

import styles from '../../../styles/module-styles/body.module.css';
import {SEX, PLATFORM, RELATIONS} from '../../../config';

export default class extends React.Component {
    showInfo = (e) => {
        if(e.target.nextElementSibling.className == styles.dropdown__content) {
            e.target.nextElementSibling.className = styles.dropdown__content__active;
            e.target.parentElement.className = styles.dropdown__active;
        }
        else {
            e.target.nextElementSibling.className = styles.dropdown__content;
            e.target.parentElement.className = styles.dropdown;
        }
    }

    render() {
        let friends = this.props.user.map((friend) => {
            let lastSeen =  friend.last_seen ? dayjs.unix(friend.last_seen.time).format('HH:mm') : 'Hidden';

            return (
                <div className={styles.body__friends__item} key={friend.id}>
                    <div className={styles.body__friend__name}> 
                        <div> {friend.first_name} </div> 
                        <div> {friend.last_name} </div>
                    </div>
                    <img className={styles.body__friends__photo} src={friend.photo_200_orig} alt="Friend photo" />

                    <div className={styles.body__friends__online}> 
                        <div className={friend.online ? styles.body__friends__online__dot : styles.body__friends__offline__dot}>  
                        </div>
                        {friend.online ? 'Online' : 'Offline'} 
                        <img className={styles.body__platform} 
                            src={friend.last_seen ? PLATFORM[friend.last_seen.platform] : 'dist/img/unknown.png'} />
                    </div>
                    <div className={styles.body__friends__last__seen}>
                        <div><strong>Last Seen: </strong> {lastSeen}</div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.body__friends__more__btn} onClick={this.showInfo}>Show more</button>
                        <div className={styles.dropdown__content}>
                            <div className={styles.friend__more__info}>
                                <strong>Sex: </strong> <div>{friend.sex ? SEX[friend.sex] : 'Not specified'}</div>
                            </div>
                            <div className={styles.friend__more__info}>
                                <strong>City: </strong> <div>{friend.city ? friend.city.title : 'Not specified'}</div>
                            </div>
                            <div className={styles.friend__more__info}>
                                <strong>Relations: </strong> <div>{friend.relation ? RELATIONS[friend.relation] : 'Not specified'}</div>
                            </div>
                            <div className={styles.friend__more__info}>
                                <strong>User ID: </strong> <div>{friend.id}</div>
                            </div>
                            <div className={styles.friend__more__info}>
                                <strong>Domain: </strong> <div>{friend.domain}</div>
                            </div>
                            <div className={styles.friend__more__info}>
                                <strong>Nickname: </strong> <div>{friend.nickname ? friend.nickname : 'Not specified'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className={styles.body__friends__list}>
                {friends}
            </div>
        );
    }
}
