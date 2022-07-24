import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

import { APIData } from "../../api/APIData";

const options = [
  // { value: "latest", label: "Latest" },
  { value: 0, label: "Big houses" },
  { value: 1, label: "Small houses" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: 44,
    minHeight: 44,
    borderRadius: 8,
    marginBottom: 20,
  }),
  menu: (base) => ({
    ...base,
    marginTop: 2,
  }),
  option: (base) => ({
    ...base,
    fontWeight: 400,
  }),
  singleValue: (base) => ({
    ...base,
    fontWeight: 400,
  }),
};

const AddNewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editPost, setEditPost] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(1);
  const [price, setPrice] = useState(0);
  const [files, setFiles] = useState([]);
  const [description, setDescripton] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (id) {
      setEditPost(true);
      fetch(`https://assist-jully-2022-be1.azurewebsites.net/api/listing/${id}`)
        .then((getId) => getId.json())
        .then((data) => {
          // console.log(data);
          setTitle(data.title)
          setCategory(data.category)
          setPrice(data.price)
          setDescripton(data.description)
          setLocation(data.location)
          setPhone(data.phoneNumber ? data.phoneNumber : '')
        })
    };
  }, [id])

  const handleDesciptionChange = (e) => {
    setDescripton(e.target.value);
  };

  const sendFileToAddNewPage = (urlOfImage) => {
    setFiles(urlOfImage);
    console.log("in add new", files);
  };

  const handleLocation = (e) => {
    let firstLetterUpperAndRestLower = e.target.value;
    setLocation(
      firstLetterUpperAndRestLower.charAt(0).toUpperCase() +
      firstLetterUpperAndRestLower.slice(1).toLowerCase()
    );
  };

  const handleCreateNew = (e) => {
    e.preventDefault();

    let item = {
      title: title,
      description: description,
      location: location,
      price: price,
      category: category,
      authorId: "A5BF21BA-E26B-49E5-C17A-08DA688B8AC2",
      featured: true,
      images: '',
      phoneNumber: phone,
      // authorId: localStorage.getItem('userId'),
      updatedAt: '',
      status: true,
    };

    if (editPost) {
      item = { ...item, id: id, approvedById: null };
      APIData.editPost(item, item.id);
      navigate(`/mylisting/${item.id}`);
    } else {
      APIData.addPost(item);
      navigate(`/`);
    }
  };

  return (
    <StyledPageContainer>
      <StyledPageContent>
        <StyledPageTitle text={"Add new"} />

        {/* Details */}
        <StyledData>
          <StyledAddPageLabels
            labelText='Details'
            paragraphText='Be as thorough as you can.'
          />
          <StyledRightContent>
            <StyledInputLabel text='Title' />
            <StyledLoginFormInput
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <StyledInputLabel text='Category' />
            <Select
              options={options}
              styles={customStyles}
              onChange={(e) => {
                setCategory(e.value);
              }}
              placeholder={
                <div className='select-placeholder-text'>Select category</div>
              }
              defaultValue={{ label: "Big houses" }}
            />
            <StyledInputLabel text='Price' />
            <StyledSmallFormInput
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span>lei</span>
          </StyledRightContent>
        </StyledData>
        {/* Photo & videos */}
        <StyledData>
          <StyledAddPageLabels
            labelText='Photo & videos'
            paragraphText='Be as thorough as you can.'
          />
          <StyledRightContent>
            <ImagePicker sendFileToAddNewPage={sendFileToAddNewPage} />
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
            <StyledTextarea
              value={description}
              onchange={(e) => handleDesciptionChange(e)}
            />
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
            <StyledLoginFormInput
              value={location}
              onChange={(e) => handleLocation(e)}
            />
            <StyledInputLabel text='Phone number' />
            <StyledSmallFormInput
              onKeyPress={(event) => {
                if (!/[0-9+]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </StyledRightContent>
        </StyledData>
        <div className='data'>
          <div className='row'>
            <StyledPageButton text={"Preview"} color={false} />
            <StyledPageButton
              text={editPost ? "Edit" : "Publish"}
              color={true}
              onclick={(e) => handleCreateNew(e)}
            />
          </div>
        </div>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default AddNewPage;
