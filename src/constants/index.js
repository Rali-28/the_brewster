/* Static Texts for Rendering */
import { mission, vision, values } from "../assets";

export const navLinks = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'menu',
        title: 'Menu',
    },
    {
        id: 'about-us',
        title: 'About Us',
    },
    {
        id: 'contacts',
        title: 'Contacts',
    },
];

export const menu =
[
    {
        title: 'Iced/Hot Coffee',
        product: [
            {
                id: 'Espresso',
            },
            {
                id: 'Americano',
            },
            {
                id: 'Cafe Latte',
            },
            {
                id: 'Cappuccino',
            },
            {
                id: 'Machiatto',
            },
        ],
    },
    {
        title: 'Iced/Hot Non-Coffee',
        product: [
            {
                id: 'Chocolate',
            },
            {
                id: 'Matcha Latte',
            },
            {
                id: 'Peach Mango',
            },
            {
                id: '',
            },
            {
                id: 'Water',
            },
        ],
    },
    {
        title: 'Pastries',
        product: [
            {
                id: 'Brownies',
            },
            {
                id: 'Caramel Bar',
            },
            {
                id: 'Blueberry Cheesecake',
            },
            {
                id: 'Calamansi Cheesecake',
            },
        ],
    },
];

export const aboutUs = [
    {
        id: 'mission',
        title: 'Mission',
        message: 'To Promote Coffee.         ',
        img: mission,
    },
    {
        id: 'vision',
        title: 'Vision',
        message: 'Everyone enjoying coffee.         ',
        img: vision,
    },
    {
        id: 'values',
        title: 'Values',
        message: 'Uphold coffee.',
        img: values,
    },
]

export const contacts = [
    {
        id: 'location',
        title: 'Location',
        txt: 'Brgy Kanluran, Santa Rosa Laguna',
    },
    {
        id: 'working',
        title: 'Working Hours',
        txt: 'Tuesday-Sunday: 1:00pm to 12:00am'
    },
]