import React, { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  useToast,
  Card,
  CardBody,
  Icon,
  Center,
  Button,
  Progress,
  Badge,
  Flex,
  Divider,
  keyframes,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FiFile, FiX, FiShield, FiCpu, FiActivity } from 'react-icons/fi';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const MedicalUploadIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    <path d="M11.993 16.75l2.747 -2.815a1.9 1.9 0 0 0 0 -2.632a1.775 1.775 0 0 0 -2.56 0l-.183 .188l-.183 -.189a1.775 1.775 0 0 0 -2.56 0a1.899 1.899 0 0 0 0 2.632l2.738 2.825z" />
  </Icon>
);

const FeatureCard = ({ icon, title, description }) => (
  <Card
    bg="white"
    p={6}
    borderRadius="xl"
    boxShadow="lg"
    transition="all 0.3s ease"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    h="full"
  >
    <VStack spacing={4} align="flex-start">
      <Icon as={icon} w={8} h={8} color="#5A6F6A" />
      <Heading size="md" color="#1a365d">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  </Card>
);

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const toast = useToast();

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const simulateUploadProgress = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setUploadProgress(0), 1000);
      }
    }, 100);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      handleFileUpload(droppedFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [toast]);

  const handleFileUpload = (selectedFile) => {
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
    simulateUploadProgress();

    toast({
      title: "File uploaded successfully",
      description: selectedFile.name,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    setUploadProgress(0);
  };

  return (
    <Box bg="#1a365d" minH="100vh">
      {/* Hero Section */}
      <Box 
        w="full" 
        position="relative" 
        overflow="hidden"
        pb={20}
        pt={10}
        animation={`${fadeIn} 0.5s ease-out`}
      >
        <Container maxW="container.xl">
          <VStack spacing={8} align="center">
            <VStack spacing={4}>
              <Heading
                size="2xl"
                color="white"
                textAlign="center"
                fontWeight="bold"
                animation={`${fadeIn} 0.8s ease-out`}
                _hover={{ transform: 'scale(1.02)', transition: 'transform 0.3s' }}
              >
                MedVisor AI
              </Heading>
              <Text
                color="#5A6F6A"
                fontSize="2xl"
                textAlign="center"
                maxW="800px"
                fontWeight="medium"
                animation={`${fadeIn} 1s ease-out`}
              >
                Advanced Medical Image Analysis Powered by Artificial Intelligence
              </Text>
            </VStack>

            {/* Upload Card */}
            <Card
              bg="white"
              w="full"
              maxW="800px"
              borderRadius="2xl"
              boxShadow="2xl"
              overflow="hidden"
              animation={`${fadeIn} 1.2s ease-out`}
              transition="all 0.3s ease"
              _hover={{ transform: 'translateY(-2px)' }}
            >
              <CardBody p={8}>
                <VStack spacing={6}>
                  {!file ? (
                    <Box
                      w="100%"
                      h="300px"
                      border="3px dashed"
                      borderColor={isDragging ? "#5A6F6A" : "gray.200"}
                      borderRadius="xl"
                      transition="all 0.3s ease"
                      bg={isDragging ? "#f0f4f4" : "white"}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      _hover={{ 
                        borderColor: "#5A6F6A", 
                        bg: "#f0f4f4",
                        transform: 'scale(1.01)'
                      }}
                    >
                      <Center h="100%" flexDirection="column" p={4}>
                        <Icon 
                          as={MedicalUploadIcon} 
                          w={20} 
                          h={20} 
                          color="#5A6F6A"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          fill="none"
                          mb={6}
                          animation={`${pulse} 2s infinite`}
                        />
                        <VStack spacing={4}>
                          <Text 
                            fontSize="2xl" 
                            fontWeight="medium" 
                            color="#1a365d"
                          >
                            Upload Your Medical Image
                          </Text>
                          <Text color="gray.500" fontSize="lg">
                            Drag and drop here or
                          </Text>
                          <Button
                            as="label"
                            htmlFor="file-upload"
                            bg="#1a365d"
                            color="white"
                            size="lg"
                            px={8}
                            height="56px"
                            fontSize="lg"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{ 
                              bg: "#2a4365",
                              transform: 'translateY(-2px)',
                              boxShadow: 'lg'
                            }}
                          >
                            Select File
                            <input
                              id="file-upload"
                              type="file"
                              accept="image/*"
                              onChange={handleFileSelect}
                              style={{ display: 'none' }}
                            />
                          </Button>
                          <Text 
                            fontSize="sm" 
                            color="gray.500" 
                            textAlign="center"
                          >
                            Supported formats: JPEG, PNG, DICOM
                          </Text>
                        </VStack>
                      </Center>
                    </Box>
                  ) : (
                    <Box w="100%">
                      <VStack spacing={4} align="stretch">
                        <HStack justify="space-between" align="center">
                          <HStack spacing={4}>
                            <Icon as={FiFile} w={6} h={6} color="#5A6F6A" />
                            <Text color="#1a365d" fontWeight="medium">
                              {file.name}
                            </Text>
                          </HStack>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={removeFile}
                            colorScheme="red"
                          >
                            <Icon as={FiX} />
                          </Button>
                        </HStack>
                        {preview && (
                          <Image
                            src={preview}
                            alt="Preview"
                            maxH="300px"
                            objectFit="contain"
                            borderRadius="lg"
                          />
                        )}
                        {uploadProgress > 0 && (
                          <Progress
                            value={uploadProgress}
                            size="sm"
                            colorScheme="blue"
                            borderRadius="full"
                          />
                        )}
                      </VStack>
                    </Box>
                  )}
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box bg="white" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4}>
              <Heading color="#1a365d" size="xl">
                Why Choose MedVisor?
              </Heading>
              <Text color="#5A6F6A" fontSize="lg" textAlign="center" maxW="600px">
                Advanced technology meets medical expertise for precise diagnosis
              </Text>
            </VStack>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              <GridItem>
                <FeatureCard
                  icon={FiShield}
                  title="Secure Analysis"
                  description="Your medical data is protected with enterprise-grade security and encryption"
                />
              </GridItem>
              <GridItem>
                <FeatureCard
                  icon={FiCpu}
                  title="AI-Powered"
                  description="State-of-the-art artificial intelligence for accurate medical image analysis"
                />
              </GridItem>
              <GridItem>
                <FeatureCard
                  icon={FiActivity}
                  title="Real-time Results"
                  description="Get instant insights and detailed analysis of your medical images"
                />
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box bg="#f8fafc" py={16}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} textAlign="center">
            <VStack>
              <Text color="#1a365d" fontSize="4xl" fontWeight="bold">99.9%</Text>
              <Text color="#5A6F6A" fontSize="lg">Accuracy Rate</Text>
            </VStack>
            <VStack>
              <Text color="#1a365d" fontSize="4xl" fontWeight="bold">1M+</Text>
              <Text color="#5A6F6A" fontSize="lg">Images Analyzed</Text>
            </VStack>
            <VStack>
              <Text color="#1a365d" fontSize="4xl" fontWeight="bold">24/7</Text>
              <Text color="#5A6F6A" fontSize="lg">Support Available</Text>
            </VStack>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
