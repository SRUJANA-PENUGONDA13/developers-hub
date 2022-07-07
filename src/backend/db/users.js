import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "adarsh",
    lastName: "balika",
    username: "adarsh@gmail.com",
    password: "testuser",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Srujana",
    lastName: "Penugonda",
    username: "srujanapenugonda@gmail.com",
    password: "srujana",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Pavani",
    lastName: "Penugonda",
    username: "pavani@gmail.com",
    password: "pavani",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
