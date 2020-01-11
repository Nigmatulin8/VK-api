import React from 'react';
import style from '../../../styles/module-styles/simplePreloader.module.css';

export default class extends React.Component {
    render() {
        return (
            <div className={style.holder}>
                <div className={style.preloader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
