import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const transactionData = [
    {
      id: 1,
      date: "2023-11-13",
      time: "09:30:00",
      amount: 100.0,
      status: "complete",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
    },
    {
      id: 2,
      date: "2023-11-13",
      time: "12:45:00",
      amount: 50.25,
      status: "pending",
      type: {
        name: "INR Deposit",
        tag: "Credit",
      },
    },
    {
      id: 3,
      time: "15:20:00",
      date: "2023-11-14",
      amount: 75.5,
      status: "canceled",
      type: {
        name: "INR Withdraw",
        tag: "Dedit",
      },
    },
    {
      id: 4,
      date: "2023-11-14",
      time: "18:10:00",
      amount: 30.0,
      status: "pending",
      type: {
        name: "INR Deposit",
        tag: "Credit",
      },
    },
    {
      id: 5,
      date: "2023-11-15",
      amount: 200.75,
      time: "10:00:00",
      status: "complete",
      type: {
        name: "INR Withdraw",
        tag: "Credit",
      },
    },
    {
      id: 6,
      date: "2023-11-15",
      time: "14:30:00",
      amount: 45.5,
      status: "canceled",
      type: {
        name: "INR Withdraw",
        tag: "Wire Transfer",
      },
    },
    {
      id: 7,
      date: "2023-11-17",
      time: "13:20:00",
      amount: 90.5,
      status: "complete",
      type: {
        name: "INR Deposit",
        tag: "Credit",
      },
    },
    {
      id: 8,
      date: "2023-11-17",
      time: "17:55:00",
      amount: 10.0,
      status: "processing",
      type: {
        name: "INR Deposit",
        tag: "Dredit",
      },
    },
  ];

  const statusColor = {
    pending: "#796E82",
    processing: "#F5A50B",
    canceled: "#DC2626",
    complete: "#059669",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        {/* <TableCaption>Just Some Fake Data</TableCaption> */}
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time </Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* <Tr> */}
          {transactionData.map((Data) => (
            <Tr key={Data.id}>
              <Td fontSize="sm " fontWeight="medium">
                {" "}
                {Data.id}{" "}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm " fontWeight="medium">
                    {Data.date}
                  </Text>
                  <Text fontSize="xs " color="black.60" fontWeight="medium">
                    {Data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm " fontWeight="medium">
                    {Data.type.name}
                  </Text>
                  <Text fontSize="xs " color="black.60" fontWeight="medium">
                    {Data.type.tag}
                  </Text>
                </Stack>
              </Td>
              {/* <Tr > {transactionData.type} </Tr> */}
              <Td fontSize="sm " fontWeight="medium">
                {" "}
                {Data.amount}{" "}
              </Td>
              <Td fontSize="xs " color="black.60" fontWeight="medium">
                <Tag
                  bg={statusColor[Data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {Data.status}
                </Tag>{" "}
              </Td>
            </Tr>
          ))}
          {/* </Tr> */}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
