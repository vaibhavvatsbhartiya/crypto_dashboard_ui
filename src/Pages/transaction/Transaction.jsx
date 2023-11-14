import { Button, Card, Flex, Icon, InputGroup, InputLeftElement, Input, Tag, HStack } from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const Transaction = () => {
  const tabs = [
    {
      name: "ALL",
      count: "550",
    },
    {
      name: "Pending",
      count: "100",
    },

    {
      name: "Deposit",
      count: "250",
    },
    {
      name: "Withdraw",
      count: "150",
    },
    {
      name: "Fail",
      count: "50",
    },
  ];
  return (
    <Dashboardlayout title="Transaction Report">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={10}>
        <Tabs>
          <TabList display='flex' justifyContent='space-between' pt='4'>
          <HStack>
          {tabs.map((tabs) => (
              <Tab key={tabs.name} display="flex" gap="2" pb='4'>
                {tabs.name}
                <Tag key={tabs.count} colorScheme="gray" borderRadius="full">
                  {tabs.count}
                </Tag>
              </Tab>
            ))}
          </HStack>

            {/* Search bar */}
            <InputGroup maxW='200px' pr='2'> 
              <InputLeftElement pointerEvents="none">
              <Icon as={BsSearch}/>
              </InputLeftElement>
              <Input type="text" placeholder="Search by ID..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Dashboardlayout>
  );
};

export default Transaction;
