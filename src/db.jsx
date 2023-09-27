import js from './assets/images/icon-javscript.svg'
import ts from './assets/images/icon-typescript.svg'
import react from './assets/images/icon-react.svg'
import next from './assets/images/icon-nextjs.svg'
import node from './assets/images/icon-nodejs.svg'
import exWhite from './assets/images/icon-express.svg'
import exBlack from './assets/images/ex-black.svg'
import nest from './assets/images/icon-nest.svg'
import socket from './assets/images/icon-socket.svg'
import socketWhite from './assets/images/socket-white.svg'
import sql from './assets/images/icon-postgresql.svg'
import mongo from './assets/images/icon-mongodb.svg'
import sass from './assets/images/icon-sass.svg'
import tailwind from './assets/images/icon-tailwindcss.svg'
import laravel from './assets/images/laravel.svg'
import vue from './assets/images/vue.svg'
import nuxt from './assets/images/nuxt.svg'
import git from './assets/images/icon-git.svg'
import person from './assets/images/person.svg'
import person2 from './assets/images/person-2.png'


const data  = {
    skills : [
        {
            id:1,
            title:"Javascript",
            image:js,
            image2:js
        },
        {
            id:2,
            title:"TypeScript",
            image:ts,
            image2: ts,
        },
        {
            id:3,
            title:"React",
            image:react,
            image2: react,
        },
        {
            id:4,
            title:"Next.js",
            image:next,
            image2: nest,

        },
        {
            id:5,
            title:"Node.js",
            image:node,
            image2: node
        },
        {
            id:6,
            title:"Express.js",
            image: exWhite,
            image2:exBlack
        },
        {
            id:7,
            title:"Nest.js",
            image:nest,
            image2: nest,
        },
         {
            id:8,
            title:"Socket.io",
            image:socketWhite,
             image2: socket,
        },
        {
            id:9,
            title:"PostgreSQL",
            image:sql,
            image2: sql,
        },
        {
            id:10,
            title:"MongoDB",
            image:mongo,
            image2: mongo,
        },
        {
            id:11,
            title:"Sass/Scss",
            image:sass,
            image2: sass,
        },
        {
            id:12,
            title:"Tailwindcss",
            image:tailwind,
            image2: tailwind,
        },
        {
            id:13,
            title:"Laravel (PHP)",
            image:laravel,
            image2: laravel,
        },
        {
            id:14,
            title:"Vue.js",
            image:vue,
            image2: vue,
        },
        {
            id:15,
            title:"Nuxt.js",
            image:nuxt,
            image2: nuxt,
        },
        {
            id:16,
            title:"Git",
            image:git,
            image2: git,
        },

    ],
    workSkills : [
        {
            id:1,
            title:"Vue.js",
        },
        {
            id:2,
            title:"Nuxt.js",
        },
        {
            id:3,
            title:"TypeSCript",
        },
        {
            id:4,
            title:"Nest.js",
        },
        {
            id:5,
            title:"PostgreSQL",
        },
        {
            id:6,
            title:"Tailwindcss",
        },
        {
            id:7,
            title:"Figma",
        },
        {
            id:8,
            title:"Cypress",
        },
        {
            id:9,
            title:"Navie.UI",
        },
        {
            id:10,
            title:"Git",
        }
    ],
    comments : [
        {
            id:1,
            name:"Dilshod Buymurodov",
            title : "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
            image : person,
            company: 'Founder - Paymart.uz',
        } ,
        {
            id:2,
            name:"Djasur Djumaev",
            title:"“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
            image : person2,
            company: 'Co-Founder - Uzum.uz',
        },
        {
            id:3,
            name:"Avaz Aminov ",
            title: "“Mukhriddin was extremely easy and pleasant to work with and he truly cares about the project being a success. Mukhriddin has a high level of knowledge and was able to work on my Full stack application without any issues.”",
            image : person,
            company: 'PM - Solution Lab',
        }
    ],


}

export default data