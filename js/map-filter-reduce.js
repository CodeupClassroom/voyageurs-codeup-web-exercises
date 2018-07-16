"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

let newUsers = users.filter( user => user.languages.length > 2);

// console.log(newUsers);


let emails = users.map( user => user.email);

// console.log(emails);

let newObjects = users.reduce( (accumulation, curObj) => {
    accumulation[curObj.id] = curObj;
    return accumulation;
}, {});

console.log(newObjects);


// expected output
// const userObject = {
//   1:{
//       id: 1,
//       name: 'ryan',
//       email: 'ryan@codeup.com',
//       languages: ['clojure', 'javascript']
//   },
//   2:{
//       id: 2,
//       name: 'luis',
//       email: 'luis@codeup.com',
//       languages: ['java', 'scala', 'php']
//   },
//   3:{
//       id: 3,
//       name: 'zach',
//       email: 'zach@codeup.com',
//       languages: ['javascript', 'bash']
//   },
//   4:{
//       id: 4,
//       name: 'fernando',
//       email: 'fernando@codeup.com',
//       languages: ['java', 'php', 'sql']
//   },
//   5:{
//       id: 5,
//       name: 'justin',
//       email: 'justin@codeup.com',
//       languages: ['html', 'css', 'javascript', 'php']
//   }
// };