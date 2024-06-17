import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Heading as="h1" size="2xl" mb={4} className="text-purple-500">
        About Webinnofy
      </Heading>
      <Text fontSize="xl" mb={6}>
        Webinnofy is dedicated to innovating the web with cutting-edge technology and design.
      </Text>
    </Box>
  );
};

export default About;