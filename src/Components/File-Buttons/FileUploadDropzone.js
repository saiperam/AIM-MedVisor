import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FileUploadDropzone = ({ label, description }) => {
    return (
        <Box border="2px dashed" padding="4" borderRadius="md">
            <Text>{label}</Text>
            <Text fontSize="sm">{description}</Text>
        </Box>
    );
};

export default FileUploadDropzone;
