import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Topnav from "./Topnav";
import Sidenav from "./Sidenav";
import SideDrawer from "./SideDrawer";

const Dashboardlayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <Topnav title={title} onOpen={onOpen} />
          <Container mt='6' maxW="70rem" overflowX='hidden' overflowY='auto' h='calc(100vh - 88px)'  >
            {children}
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default Dashboardlayout;
