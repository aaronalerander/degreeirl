import Head from 'next/head';
import {
  Box,
  Button,
  Flex,
  Text,
  Icon,
  Link,
  Stack,
  Center,
  Spacer,
  Heading
} from '@chakra-ui/react';

import { PhoneIcon, AddIcon, ChatIcon } from '@chakra-ui/icons';

const Home = () => {
  return (
    <>
      <Box bg="gray.100" py={16} px={4} h="100vh">
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Head></Head>

          <Center mb={10} mt={150}>
            <ChatIcon mr={8} w={100} h={100} color="teal.500" />
            <Heading
              mb={4}
              py={4}
              as="span"
              fontWeight="bold"
              display="inline"
              size="4xl"
            >
              Degree IRL
            </Heading>
          </Center>
          <Text align="center" mb={10}>
            Are you a high school student looking to get a better understanding
            of what your degree of choice is actually going to be like? Look no
            further! Degree IRL is a collection of honest student-made reviews
            that tell you what past and current students which they knew before
            they chose their degree!
          </Text>

          <Flex>
            <Button
              as="a"
              href="/programs"
              backgroundColor="teal.500"
              color="white"
              fontWeight="medium"
              mt={4}
              maxW="200px"
              h={70}
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              High School Student
            </Button>
            <Spacer />
            <Button
              as="a"
              href="/review"
              backgroundColor="teal.500"
              color="white"
              fontWeight="medium"
              mt={4}
              pb={2}
              maxW="200px"
              h={70}
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              Present / Former <br /> University Student
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
