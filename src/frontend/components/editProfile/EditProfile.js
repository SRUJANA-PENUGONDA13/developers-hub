import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../../services";
import {
  setDisplayProfileModal,
  setUserDetails,
  setProfileUserDetails,
} from "../../redux/slices/userSlice";
import "./EditProfile.css";

const EditProfile = () => {
  const { userDetails } = useSelector((state) => state.user);
  const [userData, setUserData] = useState(userDetails ? userDetails : {});
  const dispatch = useDispatch();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setUserData({ ...userData, pic: base64File });
  };

  const updateHandler = async () => {
    const user = await updateUserData({ ...userDetails, ...userData });
    dispatch(setProfileUserDetails(user));
    dispatch(setDisplayProfileModal(false));
    dispatch(setUserDetails(user));
  };

  return (
    <div className="edit-profile modal-inner-container flex-dir-col">
      <div className="edit-field flex-dir-row">
        <label className="edit-label">Image</label>
        <input
          className="cursor-pointer"
          accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
          type="file"
          onChange={onFileChange}
        ></input>
      </div>
      <div className="edit-field flex-dir-row">
        <label className="edit-label">Bio</label>
        <textarea
          className="edit-input"
          type="text"
          value={userData?.bio}
          onChange={(event) =>
            setUserData({ ...userData, bio: event.target.value })
          }
        ></textarea>
      </div>
      <div className="edit-field flex-dir-row">
        <label className="edit-label">Link</label>
        <input
          className="edit-input"
          type="text"
          value={userData?.link}
          onChange={(event) =>
            setUserData({ ...userData, link: event.target.value })
          }
        ></input>
      </div>

      <Button className="update-btn" size="sm" onClick={() => updateHandler()}>
        Update
      </Button>
    </div>
  );
};

export { EditProfile };
