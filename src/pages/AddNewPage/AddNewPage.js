import React from 'react';
import StyledAddPageLabels from '../../components/AddPageLabels/AddPageLabels';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import StyledInputLabel from '../../components/InputLabel/InputLabel';
import { StyledLoginFormInput } from '../../components/LoginFormInput';
import StyledPageTitle from '../../components/PageTitle/PageTitle';
import StyledTextarea from '../../components/Textarea/Textarea';
import {
  StyledData,
  StyledRightContent,
  StyledPageContainer,
  StyledPageContent,
} from './AddNewPageElements';

const AddNewPage = () => {
  return (
    <StyledPageContainer>
      <StyledPageContent>
        <StyledPageTitle text={'Add new'} />

        {/* Details */}
        <StyledData>
          <StyledAddPageLabels
            labelText='Details'
            paragraphText='Be as thorough as you can.'
          />
          <StyledRightContent>
            <StyledInputLabel text='Title' />
            <StyledLoginFormInput />
            <StyledInputLabel text='Category' />
            <StyledLoginFormInput />
            <StyledInputLabel text='Price' />
            <StyledLoginFormInput />
          </StyledRightContent>
        </StyledData>
        {/* Photo & videos */}
        <StyledData>
          <StyledAddPageLabels
            labelText='Photo & videos'
            paragraphText='Be as thorough as you can.'
          />
          <StyledRightContent>
            <ImagePicker />
          </StyledRightContent>
        </StyledData>
        {/* Description */}
        <StyledData>
          <StyledAddPageLabels
            labelText='Description'
            paragraphText='Be as thorough as you can.'
          />
          <StyledRightContent>
            <StyledInputLabel text='Description details' />
            <StyledTextarea />
          </StyledRightContent>
        </StyledData>
        {/* Contact info */}
        <StyledData>
          <StyledAddPageLabels
            labelText='Contact info'
            paragraphText='Be as thorough as you can.'
          />
          <StyledRightContent>
            <StyledInputLabel text='Location' />
            <StyledLoginFormInput />
            <StyledInputLabel text='Phone number' />
            <StyledLoginFormInput />
          </StyledRightContent>
        </StyledData>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default AddNewPage;
