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
    </Section>
  );
};

export default ImagePicker;
