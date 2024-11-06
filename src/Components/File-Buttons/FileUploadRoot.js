import React from 'react';
import { Box } from '@chakra-ui/react';

const FileUploadRoot = ({ children, maxW, alignItems, maxFiles }) => {
    return (
        <Box maxW={maxW} display="flex" alignItems={alignItems}>
            {children}
        </Box>
    );
};

export default FileUploadRoot;
