import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Section } from "./ImagePickerStyle";
import { BsPlusLg } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { nanoid } from "nanoid";

const ImagePicker = ({ sendFileToAddNewPage }) => {
  const [files, setFiles] = useState([]);



  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            id: nanoid(),
          })
        ),
      ]);
      console.log('aici');
      sendFileToAddNewPage(files)
    },
  });

  const onTrashClick = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const thumbs = files.map((file) => (
    <div className="selectedImage" key={file.id}>
      <img src={file.preview} alt={file.path} />
      <div className="delete"></div>
      <div className="circle">
        <BiTrash onClick={() => onTrashClick(file.id)} />
      </div>
    </div>
  ));

  return (
    <Section className="container">
      <>{thumbs}</>
      <div {...getRootProps({ className: "dropzone " })}>
        <input {...getInputProps()} />
        <BsPlusLg />
      </div>
    </Section>
  );
};

export default ImagePicker;
