import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const MainIntro = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      justify="space-between"
      align={{
        base: "flexStart",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      {/* section starts */}

      <HStack
        spacing={{
          base: "0",
          md: "5",
          xl: "16",
        }}
        align={{
          base: "flexStart",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Amount Owns</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            111,000.001
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            align={{
              base: "flexStart",
              xl: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            spacing={{
              base: "4",
              // sm : "5",
              lg: "0",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.203480
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 2200.203480
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      {/* Buttons */}
      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default MainIntro;
