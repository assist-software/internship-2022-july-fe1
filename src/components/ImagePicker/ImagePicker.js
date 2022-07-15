<<<<<<< HEAD
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Section } from './ImagePickerStyle';
import { BsPlusLg } from 'react-icons/bs';

const ImagePicker = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div class='selectedImage' key={file.path}>
      <img src={file.preview} alt={file.path} />
    </div>
  ));

  return (
    <Section className='container'>
      <div {...getRootProps({ className: 'dropzone ' })}>
        <input {...getInputProps()} />
        <BsPlusLg />
      </div>
      <>{thumbs}</>
=======
import React from "react";
import { useDropzone } from "react-dropzone";
import { Section } from "./ImagePickerStyle";
import { BsPlusLg } from "react-icons/bs";

const ImagePicker = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <BsPlusLg />
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
>>>>>>> 897d031e340445be6f2b57586d37106758a0aac3
    </Section>
  );
};

export default ImagePicker;
