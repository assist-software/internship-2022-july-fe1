import { FcGoogle } from "react-icons/fc";
import { Button } from "./GoogleButtonStyle";

const StyledGoogleButton = ({ text }) => {
  return (
    <Button>
      <FcGoogle />
      <span>{text}</span>
    </Button>
  );
};

export default StyledGoogleButton;
