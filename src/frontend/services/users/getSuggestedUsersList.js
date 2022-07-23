const isUserExistInList = (list, userName) => {
  let flag = false;

  list.forEach((ele) => {
    if (ele.username === userName) {
      flag = true;
    }
  });
  return flag;
};

export const getSuggestedUsersList = (userList, loginUser) => {
  const suggestedUsers = [];
  const knownUsers = [
    ...loginUser?.following,
    ...loginUser?.followers,
    loginUser,
  ];
  userList.forEach((user) => {
    if (!isUserExistInList(knownUsers, user.username)) {
      suggestedUsers.push(user);
    }
  });
  return suggestedUsers;
};
