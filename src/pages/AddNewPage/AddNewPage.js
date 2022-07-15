import React from "react";
import StyledAddPageLabels from "../../components/AddPageLabels/AddPageLabels";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import {
  StyledLoginFormInput,
  StyledSmallFormInput,
} from "../../components/LoginFormInput";
import LongDropdown from "../../components/LongDropdown/LongDropdown";
import StyledPageButton from "../../components/PageButton/PageButton";
import StyledPageTitle from "../../components/PageTitle/PageTitle";
import StyledTextarea from "../../components/Textarea/Textarea";
import {
  StyledData,
  StyledRightContent,
  StyledPageContainer,
  StyledPageContent,
} from "./AddNewPageElements";

const AddNewPage = () => {
  return (
    <StyledPageContainer>
      <StyledPageContent>
        <StyledPageTitle text={"Add new"} />

        {/* Details */}
        <StyledData>
          <StyledAddPageLabels
            labelText="Details"
            paragraphText="Be as thorough as you can."
          />
          <StyledRightContent>
            <StyledInputLabel text="Title" />
            <StyledLoginFormInput />
            <StyledInputLabel text="Category" />
            <LongDropdown />
            <StyledInputLabel text="Price" />
            <StyledSmallFormInput />
            <span>lei</span>
          </StyledRightContent>
        </StyledData>
        {/* Photo & videos */}
        <StyledData>
          <StyledAddPageLabels
            labelText="Photo & videos"
            paragraphText="Be as thorough as you can."
          />
          <StyledRightContent>
            <ImagePicker />
          </StyledRightContent>
        </StyledData>
        {/* Description */}
        <StyledData>
          <StyledAddPageLabels
            labelText="Description"
            paragraphText="Be as thorough as you can."
          />
          <StyledRightContent>
            <StyledInputLabel text="Description details" />
            <StyledTextarea />
          </StyledRightContent>
        </StyledData>
        {/* Contact info */}
        <StyledData>
          <StyledAddPageLabels
            labelText="Contact info"
            paragraphText="Be as thorough as you can."
          />
          <StyledRightContent>
            <StyledInputLabel text="Location" />
            <StyledLoginFormInput />
            <StyledInputLabel text="Phone number" />
            <StyledSmallFormInput />
          </StyledRightContent>
        </StyledData>
        <div className="data">
          <div className="row">
            <StyledPageButton text={"Preview"} color={false} />
            <StyledPageButton text={"Publish"} color={true} />
          </div>
        </div>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default AddNewPage;
