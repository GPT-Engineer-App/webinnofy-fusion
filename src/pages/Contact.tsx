import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center" bgImage="url('/contact-bg.jpg')" bgSize="cover" bgPosition="center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="2xl" mb={4} className="text-purple-500">
          Contact Us
        </Heading>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Text fontSize="xl" mb={6}>
          Reach out to us at contact@webinnofy.com.
        </Text>
      </motion.div>
    </Box>
  );
};

export default Contact;