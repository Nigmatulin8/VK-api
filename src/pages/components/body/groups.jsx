import React from 'react';

import styles from '../../../styles/module-styles/body.module.css';

export default class extends React.Component {
    render() {
        let groups = this.props.user.items.map(item => {
            return (
                <div className={styles.body__groups__item} key={item.id}>
                    <div className={styles.body__group__name}> 
                        <div> {item.name} </div> 
                    </div>
                    <img className={styles.body__group__photo} src={item.photo_200} alt="Group photo" />

                    <div className={styles.group__more__info}>
                        <strong>Members count: </strong> {item.members_count} 
                    </div>
                </div>
            )
        });
        return (
            <div className={styles.body__groups__list}>
                {groups}
            </div>
        )
    }
}
