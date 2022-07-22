import { Button } from "./FormButtonStyle";

const StyledFormButton = ({ text, func }) => {

  return <Button type={'button'} onClick={func}>{text}</Button>;
};

export default StyledFormButton;
