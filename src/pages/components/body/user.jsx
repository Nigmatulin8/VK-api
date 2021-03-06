import React from 'react';

import styles from '../../../styles/module-styles/body.module.css';
import {PEOPLE_MAIN, LIFE_MAIN, SMOKING, ALCOHOL, SEX} from '../../../config';

export default class extends React.Component {
    showLangs = lang => {
        let languages = '';

        for(let i = 0, len = lang.length; i < len; i++) {
            languages += lang[i] + ' ';
        }

        return languages
    }

    showSchools = schools => {
        let schoolsMarkup = schools.map((element, index) => {
            return (
                <div key={index}>
                    <div className={styles.body__description}> 
                        <div className={styles.field__description__name}>Name: </div>
                        <div className={styles.field__description__value}>{element.name}</div>
                    </div>
                    <div className={styles.body__description}> 
                        <div className={styles.field__description__name}>From - To: </div>
                        <div className={styles.field__description__value}>{element.year_from + ' - ' + element.year_to}</div>
                    </div>
                    <div className={styles.school__field__border}> </div>
                </div>
            )
        });

        return schoolsMarkup;
    }

    showUniversities = universities => {
        let universitiesMarkup = universities.map((element, index) => {
            return (
                <div key={index}>
                    <div className={styles.body__description}> 
                        <div className={styles.field__description__name}>Name: </div>
                        <div className={styles.field__description__value}>{element.name}</div>
                    </div>
                    <div className={styles.body__description}> 
                        <div className={styles.field__description__name}>Graduation: </div>
                        <div className={styles.field__description__value}>{element.graduation}</div>
                    </div>
                    <div className={styles.school__field__border}> </div>
                </div>
            )
        });

        return universitiesMarkup;
    }

    render() {
        return (
            <div className={styles.body__information}>
                <div className={styles.user__photo__mobile}>
                    <img src={this.props.user.photo_max_orig} alt='photo' />
                </div>
                <div className={styles.field__heading}>General information: </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Full Name: </div>
                    <div className={styles.field__description__value}>{this.props.user.first_name + ' ' + this.props.user.last_name}</div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Birth Date: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.bdate ? this.props.user.bdate : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Country/City: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.city ? this.props.user.country.title + ' / ' + this.props.user.city.title : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Sex: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.sex ? SEX[this.props.user.sex] : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>About: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.about ? this.props.user.about : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Status: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.status ? this.props.user.status : 'Not specified'}
                    </div>
                </div>

                <div className={styles.field__heading}>Secondary information: </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>User ID: </div>
                    <div className={styles.field__description__value}>{this.props.user.id}</div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Domain: </div>
                    <div className={styles.field__description__value}>{this.props.user.domain}</div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Site: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.site ? this.props.user.site : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Followers counter: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.followers_count ? this.props.user.followers_count : 0}
                    </div>
                </div>

                <div className={styles.field__heading}>Life position: </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Alcohol: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.alcohol ? ALCOHOL[this.props.user.personal.alcohol] : 'Not specified'}
                    </div>
                </div>
                
                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Smoking: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.smoking ? SMOKING[this.props.user.personal.smoking] : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Life main: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.life_main ? LIFE_MAIN[this.props.user.personal.life_main] : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>People main: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.people_main ? PEOPLE_MAIN[this.props.user.personal.people_main] : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Religion: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.resigion ? this.props.user.personal.resigion : 'Not specified'}
                    </div>
                </div>

                <div className={styles.field__heading}>Education: </div>
                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Languages: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.langs.length ? this.showLangs(this.props.user.personal.langs) : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Schools: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.schools ? this.showSchools(this.props.user.schools) : 'Not specified'}
                    </div>
                </div>

                <div className={styles.body__description}> 
                    <div className={styles.field__description__name}>Universities: </div>
                    <div className={styles.field__description__value}>
                        {this.props.user.personal.universities ? this.showUniversities(this.props.user.universities) : 'Not specified'}
                    </div>
                </div>
            </div>
        )
    }
}
