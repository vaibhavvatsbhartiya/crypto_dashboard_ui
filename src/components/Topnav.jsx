import {  Box,  Button,  HStack,  Heading,  Icon,  Menu,  MenuButton,  MenuItem,  MenuList } from "@chakra-ui/react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";


const Topnav = ({title, onOpen}) => {
  return (
    <Box px='4' bg='white' >
      <HStack h="16" maxW='70rem'  mx='auto' justify='space-between' >
      <Icon as={FaBars} onClick={onOpen} display={{
      base: 'block',
      lg: 'none',
    }}/>
        <Heading fontWeight='medium' fontSize='28px'> {title} </Heading>
        <Menu>
          <MenuButton fontSize='28px' ><Icon as={FaRegUserCircle} /></MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
