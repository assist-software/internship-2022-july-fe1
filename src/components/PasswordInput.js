import styled from "styled-components"
import LoginFormInput from "./LoginFormInput"
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({passwordVisibility,toogleVisibility,password,setPassword}) => {
  return (
    <Password>
        <LoginFormInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        //type={passwordVisibility ? "password" : "text"}
        type="password"
        id="password"
        placeholder="Password"/>
        <IconPass>
                {passwordVisibility ? (
                  <FiEye onClick={toogleVisibility} />
                ) : (
                  <FiEyeOff onClick={toogleVisibility} />
                )}
              </IconPass>
    </Password>
  )
}

export default PasswordInput

const Password = styled.div`
    display: flex;
    flex-direction: column;
`

const IconPass = styled.span`
  //position: relative;
  margin: -55px 0 0 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 25px;
  cursor: pointer;
  border-left: 2px solid #D0D5DD;
`;