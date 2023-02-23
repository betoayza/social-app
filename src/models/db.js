import moment from "import";

let users = [
  {
    id: Date.now(),
    username: "pipo1",
    name: "Pipo",
    lastname: "Peps",
    tel: 1112312323,
    posts: [],
    address: "The address 123",
    isBanned: false,
    isOnline: true,
    friends: [],
    groups: [],
    messages: [],
  },
  {
    id: Date.now(),
    username: "sifu2",
    name: "Sofia",
    lastname: "Pips",
    tel: 1132352323,
    posts: [],
    address: "The address 321",
    isBanned: true,
    isOnline: false,
    friends: [],
    groups: [],
    messages: [],
  },
  {
    id: Date.now(),
    username: "pepe",
    name: "Pepito",
    lastname: "Pops",
    tel: 113847384,
    posts: [],
    address: "The address 132",
    isBanned: false,
    isOnline: false,
    friends: [],
    groups: [],
    messages: [],
  },
];


let posts = [
    {
        id: Date.now(),
        username: "pepe",
        contain: "This is a nice day",
        reactions: [],
        comments:[]
    },
    {
        id: Date.now(),
        username: "sifu2",
        contain: "This is a bad day",
        reactions: [],
        comments:[]
    },
    {
        id: Date.now(),
        username: "pipo1",
        contain: "This is a not a day",
        reactions: [],
        comments:[]
    }, 
]

let comments = [
    {
        id: Date.now(),
        username: "pepe",
        date: moment("2019-02-01"),
        responses: []
    },
    {
        id: Date.now(),
        username: "sifu1",
        date: moment("2020-12-03"),
        responses: []
    },
    {
        id: Date.now(),
        username: "pipo1",
        date: moment("2021-06-05"),
        responses: []
    },
]



export { users, posts, comments };
