import { useForm } from 'react-hook-form';
import React from 'react';
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
  LinkOverlay
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

const ProgramsTable = ({ programs }) => {
  return (
    <ChakraProvider resetCSS>
      <Flex
        flexDirection="column"
        backgroundColor="white"
        padding="10"
        borderRadius="20"
        //alignItems="center"
        //as="form"

        // onSubmit={handleSubmit(onCreateReview)}
      >
        <Flex alignItems="stretch" justifyContent="center">
          <Text fontWeight="bold" fontSize="4xl" mb={45}>
            Select A Program
          </Text>
        </Flex>

        {programs.map((program) => (
          <NextLink
            key={program.id}
            href="/program/[programId]"
            as={`/program/${program.id}`}
            passHref
          >
            <Flex
              key={program.id}
              border="2px solid gray"
              borderRadius="20"
              mb={8}
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.300',
                transform: 'scale(0.99)'
              }}
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="gray.700"
                ml={10}
                mt={5}
                mb={5}
              >
                <Link>{program.name}</Link>
              </Text>
            </Flex>
          </NextLink>
        ))}
      </Flex>
    </ChakraProvider>
  );
};
export default ProgramsTable;
