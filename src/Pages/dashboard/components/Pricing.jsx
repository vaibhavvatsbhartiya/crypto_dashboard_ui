import {
  Stack,
  HStack,
  Text,
  Icon,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakracustoms/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Pricing = () => {
  const timestamps = ["7:15pm", "8:15pm", "9:15pm", "10:15pm", "11:15pm"];

  return (
    <CustomCard>
      <Flex align="start" justify="space-between">
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
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  21%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        {/* Buttons */}
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      {/* Tabs */}
      <Tabs variant="soft-rounded" >
       <Flex  justify='end'>
       <TabList bg='black.5' p='3px' >
       {
        ['1H', '1D', '1W', '1M'].map((tab) =>(
            <Tab _selected={{
                bg:'white'
            }} fontSize='sm' p='6px' borderRadius='5' key={tab} > {tab} </Tab>
        ))
       }
        </TabList>
       </Flex>
        <TabPanels>
          <TabPanel>
            {/* Image */}
            <Image width="100%" src="/graph.svg" mt="48px" />
            <HStack justify="space-between">
            {/* Timestamps */}
              {timestamps.map((timestamps) => (
                <Text key={timestamps} fontSize="sm" color="black.80">
                  {timestamps}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default Pricing;
