import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Post } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getSpecificUserPosts, followUser, unfollowUser } from "../../services";
import {
  setProfileModalType,
  setDisplayProfileModal,
  setProfileUserDetails,
  setUserDetails,
} from "../../redux/slices/userSlice";
import { ProfileModal } from "../../components";
import "./UserProfile.css";

const UserProfile = () => {
  const [posts, setPosts] = useState([]);
  const [actionBtn, setActionBtn] = useState("Edit Profile");
  const { displayProfileModal, userDetails, profileUserDetails } = useSelector(
    (state) => state.user
  );

  const userName =
    profileUserDetails?.firstName + " " + profileUserDetails?.lastName;

  const dispatch = useDispatch();

  const isUserExistInList = (list, userName) => {
    let flag = false;

    list.forEach((ele) => {
      if (ele.username === userName) {
        flag = true;
      }
    });
    return flag;
  };

  const updateDetails = (data) => {
    dispatch(setProfileUserDetails(data.followUser));
    dispatch(setUserDetails(data.user));
  };

  const updateProfileModal = (modalType) => {
    dispatch(setProfileModalType(modalType));
    dispatch(setDisplayProfileModal(true));
  };

  const profileActionBtnHandler = async () => {
    if (actionBtn === "Edit Profile") {
      updateProfileModal("edit");
    } else if (actionBtn === "Follow") {
      const followData = await followUser(profileUserDetails.username);
      updateDetails(followData);
      setActionBtn("Unfollow");
    } else if (actionBtn === "Unfollow") {
      const unfollowData = await unfollowUser(profileUserDetails.username);
      updateDetails(unfollowData);
      setActionBtn("Follow");
    }
  };

  useEffect(() => {
    if (profileUserDetails?.username) {
      if (
        isUserExistInList(userDetails?.followers, profileUserDetails.username)
      ) {
        setActionBtn("Follow");
      } else if (
        isUserExistInList(userDetails?.following, profileUserDetails.username)
      ) {
        setActionBtn("Unfollow");
      } else {
        if (profileUserDetails?.username === userDetails.username)
          setActionBtn("Edit Profile");
        else setActionBtn("Follow");
      }

      (async () => {
        const userPosts = await getSpecificUserPosts(
          profileUserDetails.username
        );
        setPosts(userPosts);
      })();
    }
  }, [profileUserDetails]);

  return (
    <>
      {displayProfileModal && profileUserDetails && (
        <ProfileModal user={profileUserDetails} />
      )}
      <div className="profile-details flex-dir-col">
        <div className="user-details flex-dir-col">
          <Avatar
            className="profile-pic"
            size="xl"
            name={userName}
            src={profileUserDetails?.pic}
          />
          <h1 className="profile-name">{userName}</h1>
          <Button
            className="edit-profile-btn"
            variantColor="teal"
            size="sm"
            onClick={() => {
              profileActionBtnHandler();
            }}
          >
            {actionBtn}
          </Button>
          <p className="bio-conent">{profileUserDetails?.bio}</p>
          <a
            className="portfolio"
            href="https://srujana-penugonda-v1.herokuapp.com/"
            target="_blank"
          >
            {profileUserDetails?.link}
          </a>
          <div className="user-social-media-status flex-dir-row">
            <div
              className="following flex-dir-col cursor-pointer"
              onClick={() => {
                updateProfileModal("following");
              }}
            >
              <b>{profileUserDetails?.following?.length}</b>
              <p className="status-label">Following</p>
            </div>
            <div className="posts flex-dir-col">
              <b>{posts?.length}</b>
              <p className="status-label">Posts</p>
            </div>
            <div
              className="followers flex-dir-col cursor-pointer"
              onClick={() => {
                updateProfileModal("followers");
              }}
            >
              <b>{profileUserDetails?.followers?.length}</b>
              <p className="status-label">Followers</p>
            </div>
          </div>
        </div>
        <div className="posts-details flex-dir-col">
          <h1 className="posts-header">Posts</h1>
          {posts.length > 0 &&
            posts
              .map((postdetails) => {
                return <Post postDetails={postdetails} />;
              })
              .reverse()}
        </div>
      </div>
    </>
  );
};

export { UserProfile };
