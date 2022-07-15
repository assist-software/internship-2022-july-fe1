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
    </Section>
  );
};

export default ImagePicker;
