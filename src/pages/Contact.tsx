import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Heading as="h1" size="2xl" mb={4} className="text-purple-500">
        Contact Us
      </Heading>
      <Text fontSize="xl" mb={6}>
        Reach out to us at contact@webinnofy.com.
      </Text>
    </Box>
  );
};

export default Contact;