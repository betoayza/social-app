import moment from "moment";

let users = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 1,
    username: "pepe",
    message: "This is a nice day",
    reactions: [],
    comments: [],
    date: moment("2021-05-12").format("YYYY-MM-DD"),
  },
  {
    id: 2,
    username: "sifu2",
    message: "This is a bad day",
    reactions: [],
    comments: [],
    date: moment("2021-07-11").format("YYYY-MM-DD"),
  },
  {
    id: 3,
    username: "pipo1",
    message: "This is a not a day",
    reactions: [
      { id: 1, emoji: ":D", username: "pepe" },
      { id: 2, emoji: ":'(", username: "sifu2" },
    ],
    comments: [
      {
        id: 2,
        username: "sifu1",
        message: "So cool dude!",
        date: moment("2020-12-03"),
        reply: [],
      },
      {
        id: 1,
        username: "pepe",
        message: "I'm agree with that",
        date: moment("2019-02-01"),
        reply: [],
      },
    ],
    date: moment("2020-03-10").format("YYYY-MM-DD"),
  },
];

let comments = [
  {
    id: 1,
    username: "pepe",
    message: "I'm agree with that",
    date: moment("2019-02-01"),
    reply: [],
  },
  {
    id: 2,
    username: "sifu1",
    message: "So cool dude!",
    date: moment("2020-12-03"),
    reply: [],
  },
  {
    id: 3,
    username: "pipo1",
    message: "Great!",
    date: moment("2021-06-05"),
    reply: [],
  },
];

export { users, posts, comments };
