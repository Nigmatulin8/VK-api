import React from 'react';
import dayjs from 'dayjs';

import styles from '../../../styles/module-styles/body.module.css';
import { DOC_TYPE } from '../../../config.js'; 

export default class extends React.Component {
    render() {
        let docs = this.props.user.items.map(doc => {
            let date =  doc.date ? dayjs.unix(doc.date).format('DD.MM.YYYY') : 'Unknown';

            return (
                <div className={styles.body__doc__item} key={doc.id}>
                    <img src={DOC_TYPE[doc.ext] ? DOC_TYPE[doc.ext] : 'dist/img/formats/file.png'} alt='Doc'/>
                    
                    <div className={styles.body__doc__text__mobile}>
                        <div className={styles.body__doc__text}>
                            {doc.title}
                        </div>
                        <div className={styles.body__doc__text__info}>
                            {Math.round(doc.size / 1024)} KB, {date}
                        </div>
                    </div>

                    <a className={styles.body__doc__download} href={doc.url} download> <img src='dist/img/download.png' alt='Download'/> </a>
                </div>
            )
        });
        return (
            <div className={styles.body__docs__list}>
                <span className={styles.body__docs__counter}>
                    Documents: <strong>{this.props.user.count}</strong>
                </span>

                <div>
                    {docs}
                </div>
            </div>
        )
    }
}
