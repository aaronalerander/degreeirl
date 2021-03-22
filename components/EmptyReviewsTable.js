import { useForm } from 'react-hook-form';
import React from 'react';
import { format, parseISO } from 'date-fns';
import {
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
  Textarea,
  Button,
  Heading,
  Box,
  Link,
  Text,
  LinkBox,
  LinkOverlay,
  Skeleton
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { createReview } from '@/lib/db';

/*{
  programs.map((program) => (
    <Box key={program.id}>
      <Text>
        <NextLink
          href="/program/[programId]"
          as={`/program/${program.id}`}
          passHref
        >
          <Link fontWeight="medium">{program.id}</Link>
        </NextLink>
      </Text>
    </Box>
  ));
}*/

const EmptyReviewsTable = () => {
  return (
    <ChakraProvider resetCSS>
      <Flex
        flexDirection="column"
        p={10}
        backgroundColor="white"
        borderRadius="20"
      >
        <Skeleton mb={45} borderRadius="20px">
          <Flex alignItems="stretch" justifyContent="center" mb={45}>
            <Text fontWeight="bold" fontSize="4xl"></Text>
          </Flex>
        </Skeleton>

        <Skeleton borderRadius="20px" mb={10}>
          <Flex
            flexDirection="column"
            border="2px solid gray"
            borderRadius="20px"
            mr={10}
            ml={10}
            mb={10}
            pt={5}
          >
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">Name</Text>
              <Text borderRadius={20}></Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">Date Posted</Text>
              <Text borderRadius={20}></Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">School</Text>
              <Text borderRadius={20}></Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">What is your everyday like?</Text>
              <Text> </Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">What do you wish you knew</Text>
              <Text> </Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">
                Would you pick this degree again? Yes or No & Why?
              </Text>
              <Text> </Text>
            </Flex>
          </Flex>
        </Skeleton>
        <Skeleton borderRadius="20px" mb={10}>
          <Flex
            flexDirection="column"
            border="2px solid gray"
            borderRadius="20px"
            mr={10}
            ml={10}
            mb={10}
            pt={5}
          >
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">Name</Text>
              <Text borderRadius={20}></Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">Date Posted</Text>
              <Text borderRadius={20}></Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">School</Text>
              <Text borderRadius={20}></Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">What is your everyday like?</Text>
              <Text> </Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">What do you wish you knew</Text>
              <Text> </Text>
            </Flex>
            <Flex flexDirection="column" pb={8} ml={8}>
              <Text fontWeight="bold">
                Would you pick this degree again? Yes or No & Why?
              </Text>
              <Text> </Text>
            </Flex>
          </Flex>
        </Skeleton>

        <Flex pt={5} />
      </Flex>
    </ChakraProvider>
  );
};
export default EmptyReviewsTable;
