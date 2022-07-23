import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { EditProfile } from "../../components";
import { useOutsideClickHandler } from "../../custom-hooks/OutsideClickHandler";
import { setDisplayProfileModal } from "../../redux/slices/userSlice";
import { AvatarWithName } from "../../components";
import "./ProfileModal.css";

const ProfileModal = ({ user }) => {
  const { profileModalType, displayProfileModal } = useSelector(
    (state) => state.user
  );
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const { resetMenu } = useOutsideClickHandler(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (resetMenu) {
      dispatch(setDisplayProfileModal(false));
    }
  }, [resetMenu]);

  useEffect(() => {
    if (profileModalType === "following") {
      setUsers(user?.following || []);
    } else if (profileModalType === "followers") {
      setUsers(user?.followers || []);
    }
  }, [user]);

  return (
    <React.Fragment>
      {displayProfileModal && (
        <div className="profile-modal">
          <div ref={ref}>
            {profileModalType === "edit" && <EditProfile />}
            {(profileModalType === "following" ||
              profileModalType === "followers") &&
              users.length > 0 && (
                <div className="modal-inner-container profile-list flex-dir-col">
                  {users.map((user) => {
                    return <AvatarWithName user={user} />;
                  })}
                </div>
              )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { ProfileModal };
