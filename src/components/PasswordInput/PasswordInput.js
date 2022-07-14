import { StyledLoginFormInput } from "../LoginFormInput";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Password, IconPass } from "./PasswordInputStyle";

const StyledPasswordInput = ({
  passwordVisibility,
  toogleVisibility,
  password,
  setPassword,
}) => {
  return (
    <Password>
      <StyledLoginFormInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={passwordVisibility ? "password" : "text"}
        id="password"
        placeholder="Password"
      />
      <IconPass>
        {passwordVisibility ? (
          <FiEye onClick={toogleVisibility} />
        ) : (
          <FiEyeOff onClick={toogleVisibility} />
        )}
      </IconPass>
    </Password>
  );
};

export default StyledPasswordInput;
