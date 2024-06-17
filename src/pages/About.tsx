import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center" bgImage="url('/about-bg.jpg')" bgSize="cover" bgPosition="center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="2xl" mb={4} className="text-purple-500">
          About Webinnofy
        </Heading>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Text fontSize="xl" mb={6}>
          Webinnofy is dedicated to innovating the web with cutting-edge technology and design.
        </Text>
      </motion.div>
    </Box>
  );
};

export default About;