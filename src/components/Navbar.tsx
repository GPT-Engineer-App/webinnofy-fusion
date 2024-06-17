import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            <Image src="/logo.png" alt="Webinnofy Logo" boxSize="40px" mr={2} display="inline-block" />
            Webinnofy
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/about" color="white" mx={2} _hover={{ color: "purple.500" }}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="white" mx={2} _hover={{ color: "purple.500" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;