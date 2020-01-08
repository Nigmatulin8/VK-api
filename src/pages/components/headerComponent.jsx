import React from 'react';
//import Preloader from './preloaders/preloader.jsx';
import styles from '../../styles/module-styles/search.module.css';

export default class extends React.Component {
  render() {
    return (
        <div className={styles.header__main}>
           <div className={styles.header__main__title}>
              <div>
                VK API
              </div>
              

              <div className={styles.header__main__title__secondary}>
                Developers
              </div>
           </div>
        </div>
    )
  }
}
