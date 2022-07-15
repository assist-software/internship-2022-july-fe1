import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Section } from "./ImagePickerStyle";
import { BsPlusLg } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

const ImagePicker = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
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
    <div class="selectedImage" key={file.path}>
      <img src={file.preview} alt={file.path} />
      <div className="delete"></div>
      <div className="circle">
        <BiTrash />
      </div>
    </div>
  ));

  return (
    <Section className="container">
      <div {...getRootProps({ className: "dropzone " })}>
        <input {...getInputProps()} />
        <BsPlusLg />
      </div>
      <>{thumbs}</>
    </Section>
  );
};

export default ImagePicker;
