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
  Input,
  Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import { createReview } from '@/lib/db';

const ReviewForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUnique = (arr, comp) => {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  };
  const { handleSubmit, register } = useForm();
  const universities = require('../lib/localData/universities.json');
  const universitiesArray = universities['universities'];

  const programs = require('../lib/localData/programs.json');
  const programsArray = getUnique(programs.programs, 'name');

  //  this.getUnique(countries.world, "country");

  /*const onCreateSite = ({ name, url }) => {
        const newSite = {
          authorId: auth.user.uid,
          createdAt: new Date().toISOString(),
          name,
          url,
          settings: {
            icons: true,
            timestamp: true,
            ratings: false
          }
        };*/

  const onCreateReview = (stuff) => {
    createReview(stuff);
  };

  return (
    <ChakraProvider resetCSS>
      <Flex
        flexDirection="column"
        backgroundColor="gray.200"
        padding="10"
        borderRadius="20"
        as="form"
        onSubmit={handleSubmit(onCreateReview)}
      >
        <FormControl mb={9}>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Tim Drake"
            variant="filled"
            name="reviewerName"
            ref={register({
              required: 'Required'
            })}
          />

          <FormHelperText>
            You can enter your real name but I much rather you enter in names
            such as Prince Zuko, Bruce Wayne, Your Wife's Husband, etc.
          </FormHelperText>
        </FormControl>

        <FormControl mb={9}>
          <FormLabel>Degree/Program</FormLabel>
          <Select
            icon={<ChevronDownIcon />}
            variant="filled"
            size="md"
            placeholder="Select Your Program"
            name="program"
            ref={register({
              required: 'Required'
            })}
          >
            {programsArray.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
          <FormHelperText>
            What program did you or are you taking, you if can't find it sorry
            lol, this is the first release
          </FormHelperText>
        </FormControl>
        <FormControl mb={9}>
          <FormLabel>School</FormLabel>
          <Select
            icon={<ChevronDownIcon />}
            variant="filled"
            size="md"
            placeholder="Select Your University/College"
            name="school"
            ref={register({
              required: 'Required'
            })}
          >
            {universitiesArray.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
          <FormHelperText>Show some school spirit!!</FormHelperText>
        </FormControl>
        <FormControl mb={9}>
          <FormLabel>
            What is your everyday life as a student in your program consist of
            (Lots of project, lots of reading and writing essays........)
          </FormLabel>
          <Textarea
            placeholder="Honestly.........."
            resize="vertical"
            variant="filled"
            name="everyDay"
            height={250}
            ref={register({
              required: 'Required'
            })}
          />
          <FormHelperText>
            Your answer can be as short or long as you like! (the longer the
            better) Please be brutally honest
          </FormHelperText>
        </FormControl>
        <FormControl mb={9}>
          <FormLabel>
            What do you wish you knew about this program when you were applying
          </FormLabel>
          <Textarea
            placeholder="Who the hell said this degree has a lot of math! I suck at math and I'm doing fine"
            resize="vertical"
            variant="filled"
            name="wishYouKnew"
            height={250}
            ref={register({
              required: 'Required'
            })}
          />
          <FormHelperText>
            Put your self in the shoes of your grade 12 self, what did you
            want/wish you knew that you didn't or couldn't find out
          </FormHelperText>
        </FormControl>
        <FormControl mb={9}>
          <FormLabel>
            Would you pick this degree again? Yes or No & Why?{' '}
          </FormLabel>
          <Textarea
            placeholder="1000% yes I love that fact that I am going to be rich after this"
            resize="vertical"
            variant="filled"
            name="pickAgain"
            height={250}
            ref={register({
              required: 'Required'
            })}
          />
          <FormHelperText>
            Love or hate your degree? This is the place to let it all out
          </FormHelperText>
        </FormControl>
        <Button
          variant="solid"
          size="md"
          ml={300}
          mr={300}
          mt={5}
          mb={10}
          colorScheme="purple"
          type="submit"
          onClick={onOpen}
        >
          PULL THE LEVER KRONK
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Thank You For Submitting Your Review!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Thank you so much for providing your honest feedback. The form
                is supposed to clear after you click the PULL THE LEVEL KRONK
                button so that you know that it was submitted, but I made a
                mistake in my code and I am running out of time to submit this
                project. So I put this pop up here to ensure that the
                information that you inputted has been submitted.
                <br />
                <br />
                If you like you can view other people's reviews by going to the
                programs tab located at the top.
                <br />
                <br /> Thanks again.
                <br />
                <br /> Aaron{' '}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};
export default ReviewForm;
