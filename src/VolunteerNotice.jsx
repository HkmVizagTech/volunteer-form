import React from "react";
import {
  Box,
  Text,
  VStack,
  Heading,
  Button,
  Container,
  useColorModeValue,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const  VolunteerNotice =() => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const highlightBg = useColorModeValue("yellow.100", "yellow.700");

  return (
    <Box minH="100vh" bg={bg} py={12} px={4} display="flex" alignItems="center">
      <Container maxW="lg">
        <Box
          bg={cardBg}
          shadow="lg"
          borderRadius="xl"
          p={{ base: 5, md: 10 }}
          textAlign="center"
        >
          
          <Box
            bg={highlightBg}
            px={4}
            py={2}
            borderRadius="md"
            mb={6}
            fontWeight="bold"
            fontSize="xl"
            color="orange.600"
            boxShadow="sm"
          >
            🪔 Hare Krishna 🪔
          </Box>

        
          <Heading
            size="lg"
            color="red.500"
            mb={6}
            fontWeight="bold"
            lineHeight="short"
          >
            Volunteer Service Registrations Closed
          </Heading>

        
          <VStack spacing={5} align="stretch" mb={6}>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              Volunteer Service Registrations are closed for the{" "}
              <strong>Janmashtami Festival</strong>.
            </Text>

            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              If you are interested to render service, please contact the number
              below <strong>only if you are available for FULL DAY service</strong>{" "}
              for <strong>15, 16, 17 August</strong>.
            </Text>
          </VStack>

          <Divider my={6} />

       
          <VStack spacing={3}>
            <Text fontSize="lg" fontWeight="semibold" color="gray.700">
              Contact Person:
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="blue.500">
              Sitantha Dasa
            </Text>

            <Button
              leftIcon={<PhoneIcon />}
              colorScheme="teal"
              size="lg"
              borderRadius="full"
              onClick={() => (window.location.href = "tel:+919059162108")}
            >
              +91 90591 62108
            </Button>
          </VStack>

          <Divider my={6} />

        
          <Text fontSize="sm" color="gray.500">
            Thank you for reaching out to us.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}


export default VolunteerNotice;