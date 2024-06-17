import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Box className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Heading as="h1" size="2xl" mb={4} className="text-purple-500">
        Welcome to Webinnofy
      </Heading>
      <Text fontSize="xl" mb={6}>
        Innovating the web, one step at a time.
      </Text>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button colorScheme="purple" size="lg" rightIcon={<FaPlus />}>
          Get Started
        </Button>
      </motion.div>
    </Box>
  );
};

export default Index;