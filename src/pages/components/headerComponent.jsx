import React from 'react';
import styles from '../../styles/module-styles/search.module.css';

import Nav from '../containers/navContainer.jsx';

export default class extends React.Component {
  showMenu = e => {
    let menu = e.target.parentNode.nextSibling;

    if(e.target.localName !== 'button' && (menu.className === styles.header__menu__active)) {
      menu.className = styles.header__menu__not__active;
    }
    else  if (e.target.localName !== 'button' && (menu.className === styles.header__menu__not__active)) {
      menu.className = styles.header__menu__active;
    }
  }

  render() {
    return (
        <div className={styles.header__main}>
           <div className={styles.header__main__title}>
              <button className={styles.header__menu__button} onClick={this.showMenu}> 
                <img  src="dist/img/hamburger.png" alt="hamburger" />
              </button>

              <div className={styles.header__menu__not__active}>
                <Nav />
              </div>

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
