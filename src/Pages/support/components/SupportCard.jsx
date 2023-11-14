import {
  Flex,
  Stack,
  Icon,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { IoMail } from "react-icons/io5";


const SupportCard = ({leftcomponent, icon, title, text}) => {
  return (
    <Flex gap={6}
    justify={'center'}
    flexDir={{
        base: 'column',
        xl: 'row'
    }}>
      <Stack maxW='25rem'>
        <Icon as={icon} boxSize={6} color="p.purple" />
        <Text as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW='550px' w='full'>
      {leftcomponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
