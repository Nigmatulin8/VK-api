import React from 'react';
import dayjs from 'dayjs';

import styles from '../../../styles/module-styles/body.module.css';

export default class extends React.Component {
    render() {
        let wall = this.props.user.items.map(post => {
            let postDate = dayjs.unix(post.date).format('YYYY-MM-DD HH:mm:ss')
            let groupID = post.copy_history[0].owner_id;
            let groupName = null;
            let groupPhotoSrc = null;
            let postPhoto = null;

            for(let i = 0, len = this.props.user.groups.length; i < len; ++i) {
                if(Math.abs(groupID) == this.props.user.groups[i].id) {
                    groupName = this.props.user.groups[i].name;
                    groupPhotoSrc = this.props.user.groups[i].photo_200;
                    break;
                }
                else {
                    groupName = 'Unknown group';
                }
            }

            if(post.copy_history[0].attachments[0].type === 'photo') {
                postPhoto = post.copy_history[0].attachments.map((photo, index) => {
                    if(typeof photo.photo !== 'undefined' && photo.type === 'photo') {
                        let ind = photo.photo.sizes.length - 1;

                        return (
                            <img
                                src={photo.photo.sizes[ind].url} 
                                alt='Post photo' 
                                key={index} 
                            />
                        )
                    }
                });
            }

            return (
                <div className={styles.body__post__item} key={post.id}>
                    <div className={styles.body__post__item__header}>
                        <img src={groupPhotoSrc} alt="Group icon" />
                        <div className={styles.body__post__group__description}>
                            <div className={styles.body__post__group__title}>{groupName} 
                                {post.is_pinned ? <span className={styles.post__pinned}> Pinned </span>  : false}
                            </div>
                            <div className={styles.body__post__group__date}>{postDate}</div>
                        </div>
                    </div>
                    <div className={styles.body__post__body}>
                        <div className={styles.body__post__body__text}>
                            {post.copy_history[0].text}
                        </div>

                        <div className={styles.body__post__body__photo} >
                            {postPhoto}
                        </div>
                    </div>

                    <div className={styles.body__post__activity}>
                        <div className={styles.body__post__activity__left} >
                            <div className={styles.body__post__activity__like}>
                                <img src="dist/img/like.png" alt="Like" />
                                <div>{post.likes.count}</div>
                            </div>

                            <div className={styles.body__post__activity__like}>
                                <img src="dist/img/repost.png" alt="Repost" />
                                <div>{post.reposts.count}</div>
                            </div>
                        </div>
                        <div className={styles.body__post__activity__like}>
                                <img src="dist/img/views.png" alt="Like" />
                                <div>{post.views.count}</div>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className={styles.body__posts}>
                {wall}
            </div>
        )
    }
}
