import { IoMail } from "react-icons/io5";
import Dashboardlayout from "../../components/Dashboardlayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import { Stack } from "@chakra-ui/react";
import InfoCard from "../dashboard/components/InfoCard";
const Support = () => {
  return (
    <Dashboardlayout title="Help Center">
      <Stack spacing='3rem'>
        <SupportCard
          leftcomponent={<ContactCard />}
          icon={IoMail}
          title="Contact Us"
          text="Have a question or just want to know more feel free to reach out us.😊"
        />
        <SupportCard
          leftcomponent={
            <InfoCard
              inverted={true}
              tagText="Chatbot"
              imgUrl="/gridbg.svg"
              text="chat with us now "
            />
          }
          icon={AiTwotoneMessage}
          title="Live chat"
          text="Don't have time to wait for message chat with us now without further delay.😎"
        />
      </Stack>
    </Dashboardlayout>
  );
};

export default Support;
