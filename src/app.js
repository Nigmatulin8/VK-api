import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import styles from './styles/module-styles/app.module.css';

import rootReducer from './store/reducers.js';

import User from './pages/containers/userContainer.jsx';
import Header from './pages/containers/headerContainer.jsx';
import Body from './pages/containers/bodyContainer.jsx';
import Nav from './pages/containers/navContainer.jsx';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default class extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div className={styles.header__head}>
              <Header />
          </div>
          
          <div className={styles.app__screen}>
            <div className={styles.app__left}>
              <div className={styles.app__left__side}>
                <User />
                <Nav />
                </div>
            </div>

            <div className={styles.app__right__side}>
              <Body />
            </div>
          </div>
        </Provider>
      </>
    );
  }
}
