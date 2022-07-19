import StyledInputLabel from "../../components/InputLabel/InputLabel";
import StyledMyAccountTitle from "../../components/MyAccountTitle/MyAccountTitle";
import {
  ConnectedDevice,
  LineBreak,
  LoginSecurityContainer,
  StyledRowDiv,
  StyledText,
} from "./MyAccountPageElements";
import { MdLaptopWindows, MdOutlinePhoneIphone } from "react-icons/md";

const LoginSecurityPage = () => {
  return (
    <LoginSecurityContainer>
      {/* Password */}
      <StyledRowDiv>
        <StyledInputLabel text="Password" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/reset-password";
          }}
        >
          Update
        </button>
      </StyledRowDiv>
      <StyledText>Last updated 3 weeks ago</StyledText>
      <LineBreak />
      {/* Title */}
      <StyledMyAccountTitle text="Social accounts" />
      {/* Facebook*/}
      <StyledRowDiv>
        <StyledInputLabel text="Facebook" />
        <button>Connect</button>
      </StyledRowDiv>
      <StyledText>Not connected</StyledText>
      <LineBreak />
      {/* Google */}
      <StyledRowDiv>
        <StyledInputLabel text="Google" />
        <button>Disconnect</button>
      </StyledRowDiv>
      <StyledText>Connected</StyledText>
      <LineBreak />
      {/* Title */}
      <StyledMyAccountTitle text="Recent login activity" />
      {/* Windows 10  */}
      <ConnectedDevice>
        <MdLaptopWindows />
        <StyledRowDiv>
          <div>
            <StyledInputLabel text="Windows 10 - Chrome" />
            <StyledText>Suceava, SV - 25.05.2022 at 13:14</StyledText>
          </div>
          <button>Log out device</button>
        </StyledRowDiv>
      </ConnectedDevice>
      <LineBreak />

      {/* Ios */}
      <ConnectedDevice>
        <MdOutlinePhoneIphone />
        <StyledRowDiv>
          <div>
            <StyledInputLabel text="IOS 15.2 - Chrome Mobile" />
            <StyledText>Pitesti, AG - 10.06.2022 at 07:32</StyledText>
          </div>
          <button>Log out device</button>
        </StyledRowDiv>
      </ConnectedDevice>

      <LineBreak />
      {/* Title */}
      <StyledMyAccountTitle text="Account" />
      {/* Address */}
      <StyledRowDiv>
        <StyledText>Deactivate your account</StyledText>
        <button className="redTextColor">Deactivate</button>
      </StyledRowDiv>
      <LineBreak />
    </LoginSecurityContainer>
  );
};

export default LoginSecurityPage;
