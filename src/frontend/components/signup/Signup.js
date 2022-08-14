import { Link, useNavigate } from "react-router-dom";
import { Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { signupService } from "../../services";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const signUpHandler = async (user) => {
    const encodedToken = await signupService(user);
    if (!!encodedToken) {
      localStorage.setItem("token", encodedToken);
      toast({
        title: "Signup Successful",
        status: "success",
        duration: 9000,
        containerStyle: { color: "red" },
        isClosable: true,
      });
    } else {
      toast({
        title: "User Already exists",
        status: "success",
        duration: 9000,
        containerStyle: { color: "red" },
        isClosable: true,
      });
    }
    navigate("/");
  };
  return (
    <div className="auth-container flex-dir-col">
      <h1 className="auth-header">Signup</h1>
      <form
        className="auth-body flex-dir-col"
        onSubmit={(event) => {
          event.preventDefault();
          signUpHandler(user);
        }}
      >
        <div className="auth-field">
          <label for="name">Name</label>
          <Input
            placeholder="Srujana Penugonda"
            required
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="auth-field">
          <label for="email">Email address</label>
          <Input
            placeholder="srujana@outlook.com"
            required
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="auth-field">
          <label for="password">Password</label>
          <div className="password-sec flex-dir-row">
            <Input
              className="password-field"
              type={passwordIcon ? "" : "password"}
              placeholder="*************"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            {passwordIcon ? (
              <i
                class="fa-regular fa-eye password-icon"
                onClick={() => setPasswordIcon(!passwordIcon)}
              ></i>
            ) : (
              <i
                class="fa-regular fa-eye-slash password-icon"
                onClick={() => setPasswordIcon(!passwordIcon)}
              ></i>
            )}
          </div>
        </div>
        <div className="auth-field">
          <label for="confirm-password">Confirm Password</label>
          <div className="password-sec flex-dir-row">
            <Input
              type={confirmPasswordIcon ? "" : "password"}
              className="password-field"
              placeholder="*************"
              id="confirm-password"
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              required
            />
            {confirmPasswordIcon ? (
              <i
                class="fa-regular fa-eye password-icon"
                onClick={() => setConfirmPasswordIcon(!confirmPasswordIcon)}
              ></i>
            ) : (
              <i
                class="fa-regular fa-eye-slash password-icon"
                onClick={() => setConfirmPasswordIcon(!confirmPasswordIcon)}
              ></i>
            )}
          </div>
        </div>
        <div className="auth-field signup-agreement flex-dir-row">
          <input type="checkbox" value="agreement" id="agreement" required />
          <label for="agreement">I accept of Terms & Conditions</label>
        </div>
        <button type="submit" className="primary-btn">
          Create New Account
        </button>
        <Link
          role="button"
          className="auth-account-link text-decoration-none auth-field"
          to="/signin"
        >
          Already have an account
        </Link>
        {user.password !== user.confirmPassword && (
          <p className="error">password and confirm password are not same</p>
        )}
      </form>
    </div>
  );
};

export { Signup };
