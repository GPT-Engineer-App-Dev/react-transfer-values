import React, { useState } from "react";
import { Box, Button, Input, Text, VStack, Heading, Container } from "@chakra-ui/react";

const Index = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const goToPageTwo = () => {
    localStorage.setItem("userInput", inputValue);
    setPage(2);
  };

  const goToPageOne = () => {
    setPage(1);
  };

  const PageOne = () => (
    <VStack spacing={4}>
      <Heading as="h1" size="xl">
        Page One
      </Heading>
      <Text>Enter your data:</Text>
      <Input placeholder="Type something..." value={inputValue} onChange={handleInputChange} />
      <Button colorScheme="blue" onClick={goToPageTwo}>
        Submit and Go to Page Two
      </Button>
    </VStack>
  );

  const PageTwo = () => {
    const storedValue = localStorage.getItem("userInput");
    return (
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Page Two
        </Heading>
        <Text>You entered:</Text>
        <Text fontSize="xl" fontWeight="bold">
          {storedValue}
        </Text>
        <Button colorScheme="teal" onClick={goToPageOne}>
          Go Back to Page One
        </Button>
      </VStack>
    );
  };

  return (
    <Container centerContent p={8}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        {page === 1 ? <PageOne /> : <PageTwo />}
      </Box>
    </Container>
  );
};

export default Index;
