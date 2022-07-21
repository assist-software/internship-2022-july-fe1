import { Button } from "./FormButtonStyle";

const StyledFormButton = ({ text, func }) => {
  const handleClick = () => {
    onclick()
  }

  return <Button type={'button'} onClick={func}>{text}</Button>;
};

export default StyledFormButton;
