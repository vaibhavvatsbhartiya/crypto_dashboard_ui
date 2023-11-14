import { HStack, Icon, Stack, Text, Heading, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname == link;
}

  const navlinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack
    bg='white'
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      justify="space-between"
    >
      <Box>
        <Heading fontSize="20px" as="h1" pt="56px" textAlign="center">
          CD UI
        </Heading>
        <Box mx="12px" mt="6">
          {navlinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
            <HStack
            bg={isActiveLink(nav.link) ?  "#F3F3F7" : 'transpartnt'}
          color={isActiveLink(nav.link) ?  "#171717" : '#797E82'}
              py="3"
              px="4"
              borderRadius="10px"
              cursor="pointer"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
             
            >
              <Icon as={nav.icon} />
              <Text fontSize="18px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      {/* 3rd named - Support */}
      <Box mx="12px" mt="6" mb="6">
        <Link to='/support'>
        <HStack
          py="3"
          px="4"
          borderRadius="10px"
          cursor="pointer"
          bg={isActiveLink('/support') ?  "#F3F3F7" : 'transpartnt'}
          color={isActiveLink('/support') ?  "#171717" : '#797E82'}
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          // color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="18px" fontWeight="medium">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
