export const APP_ID = 7263349;
export const ACCESS_VALUES = 2 | 4 | 16 | 1024 | 131072 | 262144 | 4194304;
export const API_VERSION = '5.103';
export const PLATFORM = {
	1: 'dist/img/mobile.png',
	2: 'dist/img/apple.png',
	3: 'dist/img/apple.png',
	4: 'dist/img/android.png',
	5: 'dist/img/wp.png',
	6: 'dist/img/w10.png',
	7: 'dist/img/w10.png',
};
export const POLITICAL = {
	0: 'Not specified',
	1: 'Communist',
	2: 'Socialist',
	3: 'Moderate',
	4: 'Liberal',
	5: 'Conservative',
	6: 'Monarchical',
	7: 'Ultraconservative',
	8: 'Indifferent',
	9: 'Libertarian',
};
export const PEOPLE_MAIN = {
	0: 'Not specified',
	1: 'Mind and creativity',
	2: 'Kindness and honesty',
	3: 'Beauty and health',
	4: 'Power and wealth',
	5: 'Courage and perseverance',
	6: 'Humor and love of life',
};
export const LIFE_MAIN = {
	0: 'Not specified',
	1: 'Family and children',
	2: 'Career and money',
	3: 'Entertainment and recreation',
	4: 'Science and research',
	5: 'Perfecting the world',
	6: 'Self-development',
	7: 'Beauty and art',
	8: 'Glory and influence',
};
export const SMOKING = {
	0: 'Not specified',
	1: 'Sharply negative',
	2: 'Negative',
	3: 'Compromise',
	4: 'Neutral',
	5: 'Positive',
};
export const ALCOHOL = {
	0: 'Not specified',
	1: 'Sharply negative',
	2: 'Negative',
	3: 'Compromise',
	4: 'Neutral',
	5: 'Positive',
};
export const RELATIONS = {
	1: 'Single',
	2: 'Have a friend / have a girlfriend',
	3: 'Engaged',
	4: 'Married',
	5: 'Everything is complicated',
	6: 'In active search',
	7: 'In love',
	8: 'In a civil marriage',
	0: 'Not specified',
};
export const SCHOOLS = {
	0: 'School',
	1: 'Gymnasium',
	2: 'Lyceum',
	3: 'Boarding school',
	4: 'Evening school',
	5: 'School of music',
	6: 'Sports school',
	7: 'Art school',
	8: 'College',
	9: 'Professional lyceum',
	10: 'Technical school',
	11: 'Vocational school',
	12: 'School',
	13: 'Art school',
};
export const SEX = {
	0: 'Gender not specified',
	1: 'Female',
	2: 'Male',
};
export const USER_FIELDS = `
	verified,
    sex,
    bdate,
    city, 
    country,
    photo_max_orig,
    online,
    domain,
    contacts,
    education,
    site,
    universities,
    schools, 
    status, 
    last_seen, 
    followers_count, 
    common_count, 
    nickname, 
    relatives, 
    relation, 
    personal,
    connections, 
    interests, 
    about,
    career,`;
export const FRIENDS_FIELDS = `
	city,
	domain,
	online,
	photo_200_orig,
	relation,
	last_seen,
	sex,
	nickname,
	timezone,
	contacts`;
export const GROUPS_FIELDS = `members_count`;
/**
 * @string nom - именительный
 * @string gen — родительный;
 * @string dat — дательный;
 * @string acc — винительный;
 * @string ins — творительный;
 * @string abl — предложный.
 */