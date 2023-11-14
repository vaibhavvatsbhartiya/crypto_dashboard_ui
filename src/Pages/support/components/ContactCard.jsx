import {
    Flex,
    Stack,
    Icon,
    Text,
    Card,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Checkbox,
    Box,
    Button,
  } from "@chakra-ui/react";
const ContactCard = () => {
  return (
    <Card p={6} borderRadius="1rem"flexGrow={1} >
        <Stack spacing={3}>
          <Text>
            You will receive response within 24 hours of the time of subimt.
          </Text>
          <HStack flexDir={{
        base: 'column',
        sm: 'row'
    }}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Vaibhav" />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Vats" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your e-mail" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your query here..." />
          </FormControl>
          <Checkbox defaultCheck>
            <Text fontSize='xs'>
              i agree with
              <Box as="span" color="p.purple">
                {" "}
                Terms & Conditions
              </Box>
            </Text>
          </Checkbox>
          <Stack >
            <Button fontSize='sm' colorScheme="purple">Send a Message</Button>
            <Button fontSize='sm' colorScheme="gray">Book a Meeting</Button>
          </Stack>
        </Stack>
      </Card>
  )
}

export default ContactCard
