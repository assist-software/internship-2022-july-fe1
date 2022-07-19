import React from "react";
import StyledAddPageLabels from "../../components/AddPageLabels/AddPageLabels";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import {
  StyledLoginFormInput,
  StyledSmallFormInput,
} from "../../components/LoginFormInput";
import StyledPageButton from "../../components/PageButton/PageButton";
import StyledPageTitle from "../../components/PageTitle/PageTitle";
import StyledTextarea from "../../components/Textarea/Textarea";
import {
  StyledData,
  StyledRightContent,
  StyledPageContainer,
  StyledPageContent,
} from "./AddNewPageElements";
import Select from "react-select";

const options = [
  { value: "latest", label: "Latest" },
  { value: "big houses", label: "Big houses" },
  { value: "small houses", label: "Small houses" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: 44,
    minHeight: 44,
    borderRadius: 8,
    marginBottom: 20,
  }),
};

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
            <Select
              options={options}
              styles={customStyles}
              placeholder={
                <div className="select-placeholder-text">Select category</div>
              }
            />
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
