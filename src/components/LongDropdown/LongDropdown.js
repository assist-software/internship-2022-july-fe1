import Dropdown from "react-bootstrap/Dropdown";
import { StyledDropdown } from "./LongDropdownStyle";
import { MdKeyboardArrowDown } from "react-icons/md";

const LongDropdown = () => {
  return (
    <StyledDropdown>
      <Dropdown className="dropdown shadow-none">
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="shadow-none"
        >
          Select category
          <MdKeyboardArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </StyledDropdown>
  );
};

export default LongDropdown;
