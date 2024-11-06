import React, { useState } from 'react';
import { Box, Text, Input, List, ListItem, Image } from '@chakra-ui/react';

const HomePage = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles(selectedFiles);
  };

  return (
    <Box bg="brand.primary" p="20px" textAlign="center">
      <Text fontSize="2xl" color="brand.secondary">Welcome to MedVisor</Text>
      <Input
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        onChange={handleFileChange}
        mt="20px"
        mb="20px"
        bg="brand.white"
        color="brand.primary"
        borderRadius="md"
        cursor="pointer"
      />
      <Text fontSize="xl" color="brand.secondary">Uploaded Files:</Text>
      <List styleType="none" p="0">
        {files.map((fileObj, index) => (
          <ListItem key={index} mb="10px">
            <Text color="brand.white">{fileObj.file.name}</Text>
            <Image
              src={fileObj.preview}
              alt="Preview"
              width="200px"
              height="auto"
              borderRadius="md"
              mt="5px"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HomePage;
