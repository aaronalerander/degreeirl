import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar, Icon, Text } from '@chakra-ui/react';
import Footer from './Footer';

import { PhoneIcon, AddIcon, ChatIcon } from '@chakra-ui/icons';

const DashboardShell = ({ children }) => {
  return (
    <Box backgroundColor="gray.100" h="100%" /*h="100vh"*/>
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <ChatIcon mr={8} w={10} h={10} color="teal.500" />
              </Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontWeight="bold" mr={4}>
                Degree IRL
              </Link>
            </NextLink>

            <NextLink href="/programs" passHref>
              <Link mr={4}>Programs</Link>
            </NextLink>
            <NextLink href="/review" passHref>
              <Link mr={4}>Leave A Review</Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        margin="0 auto"
        direction="column"
        maxW="1250px"
        px={[0, 8, 8]}
        justifyContent="center"
      >
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default DashboardShell;
