import {v4 as uuid} from "uuid";

export const validUser = {
    email: 'mh_ahmadi96@yahoo.com',
    password: '12345678'
};

export const navItems = [
    {name: 'Blogs', href: '/blog'},
    {name: 'Create Blog', href: '/create'}
];

export const subjects = [
    {label: 'Literature', value: 'Literature'},
    {label: 'Sport', value: 'Sport'},
    {label: 'Science', value: 'Science'},
    {label: 'News', value: 'News'},
    {label: 'Biography', value: 'Biography'}
];

export const tags = [
    {label: 'Book', value: 'Book'},
    {label: 'Game', value: 'Game'},
    {label: 'Movie', value: 'Movie'},
    {label: 'Music', value: 'Hobby'},
    {label: 'Hobby', value: 'Hobby'},
];

export const initialBlogs = [
    {
        id: uuid(),
        title: 'The Godfather | Best Movie in Cinema History',
        description: 'Widely regarded as one of the greatest films of all time,' +
            'this mob drama, based on Mario Puzo\'s novel of the same name,' +
            'focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando).',
        tags: [{label: 'movie'}],
        subject: 'Literature',
        date: new Date().getTime(),
        payment: false,
        image: require('../assets/image/movie.jpg')
    }
]