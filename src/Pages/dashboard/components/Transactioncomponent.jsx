import React, { Fragment } from "react";
import { CustomCard } from "../../../chakracustoms/CustomCard";
import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import {
  BsCurrencyBitcoin,
  BsCurrencyDollar,
  BsCurrencyRupee,
} from "react-icons/bs";

const Transactioncomponent = () => {
  const lendaen = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      Text: "INR Deposit",
      Amount: "+ 51,000",
      Timestamp: "01-01-2002 3:55 am",
    },
    {
      id: "2",
      icon: BsCurrencyBitcoin,
      Text: "withdraw",
      Amount: "- 21.000",
      Timestamp: "05-01-2002 3:55 am",
    },
    {
      id: "3",
      icon: BsCurrencyDollar,
      Text: "Dollar Deposit",
      Amount: "+ 2,500",
      Timestamp: "11-01-2002 3:55 am",
    },
  ];
  return (
    <CustomCard h='full'>
      <Text fontSize="sm" mb="6" color="black.80">
        Recent Transaction
      </Text>
      <Stack spacing={4}>
        {lendaen.map((lendaen, i) => (
          <Fragment key={lendaen.id}>
            {(i = !0 && <Divider  />)}
            <Flex gap="4">
              <Grid
                boxSize={10}
                placeItems="center"
                bg="black.5"
                borderRadius="full"
              >
                <Icon as={lendaen.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyles="h6">{lendaen.Text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {lendaen.Timestamp}
                  </Text>
                </Stack>
                <Text textStyles="h6">{lendaen.Amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button colorScheme='gray' w='full' mt='6' >View All</Button>
    </CustomCard>
  );
};

export default Transactioncomponent;
