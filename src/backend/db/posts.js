import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "The JavaScript ecosystem has been on fire since Node.js and npm appeared. There's always a package for everything because folks have been YOLO-publishing whatever they please. It's a vibrant and enabling ecosystem feeling like the wild wild west. And of course, there are pros and cons to countless dependencies.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    name: "srujana penugonda",
    username: "srujanapenugonda@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        user: {
          firstName: "Karthik",
          lastName: "Bandi",
          username: "karthikbandi@gmail.com",
        },

        content: "Interesting",
        votes: 0,
      },
      {
        _id: uuid(),
        user: { firstName: "Ram", lastName: "Raju", username: "ram@gmail.com" },
        content: "Wow!",
        votes: 0,
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "ca9568da-4a29-4f1c-b62f-01b2922eadc9",
          firstName: "Srujana",
          lastName: "Penugonda",
          username: "srujanapenugonda@gmail.com",
          password: "srujana",
          createdAt: "2022-07-05T01:22:49+05:30",
          updatedAt: "2022-07-05T01:22:49+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "2",
        },
      ],
      dislikedBy: [],
    },
    name: "pavani penugonda",
    username: "pavani@gmail.com",
    comments: [
      {
        _id: uuid(),
        user: {
          firstName: "Charan",
          lastName: "Ghosh",
          username: "charanghosh@gmail.com",
        },

        content: "Interesting",
        votes: 0,
      },
      {
        _id: uuid(),
        user: {
          firstName: "Srujana",
          lastName: "Penugonda",
          username: "srujanapenugonda@gmail.com",
        },
        content: "Wow!",
        votes: 0,
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "82ac7a56-0b02-4415-9e8a-b9a36c8137f6",
    content:
      "StrictMode is a React Developer Tool primarily used for highlighting possible problems in a web application. It activates additional deprecation checks and warnings for its child components. One of the reasons for its popularity is the fact that it provides visual feedback (warning/error messages) whenever the React guidelines and recommended practices are not followed. Just like the React Fragment, the React StrictMode Component does not render any visible UI. ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "ca9568da-4a29-4f1c-b62f-01b2922eadc9",
          firstName: "pavan",
          lastName: "Penugonda",
          username: "pavan@gmail.com",
          password: "pavan",
          createdAt: "2022-07-05T01:22:49+05:30",
          updatedAt: "2022-07-05T01:22:49+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "2",
        },
        {
          _id: "ca9568da-4a29-4f1c-b62f-01b2922eadc9",
          firstName: "sathvik",
          lastName: "Penugonda",
          username: "sathvik@gmail.com",
          password: "sathvik",
          createdAt: "2022-07-05T01:22:49+05:30",
          updatedAt: "2022-07-05T01:22:49+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "2",
        },
      ],
      dislikedBy: [],
    },
    name: "Subhash Dugar",
    username: "suhashdugar@gmail.com",
    createdAt: "2022-07-06T11:49:50+05:30",
    updatedAt: "2022-07-06T11:49:50+05:30",
    comments: [
      {
        _id: "7e060580-0009-48a9-8040-37b8505e0adf",
        content: "Nice content",
        votes: 0,
        user: {
          username: "srujanapenugonda@gmail.com",
          firstName: "srujana",
          lastName: "penugonda",
        },
        replies: [
          {
            _id: "7e060580-0009-48a9-6040-37b8505e0adf",
            content: "Awesome Content",
            user: {
              username: "pavani@gmail.com",
              firstName: "pavani",
              lastName: "penugonda",
            },
          },
        ],
      },
      {
        _id: "7e060580-0009-48a5-8040-37b8505e0adf",
        content: "Nice content",
        votes: 0,
        user: {
          username: "pravingade@gmail.com",
          firstName: "Pravin",
          lastName: "Gade",
        },
      },
    ],
    id: "3",
  },
];
