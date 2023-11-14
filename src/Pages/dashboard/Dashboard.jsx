import { Grid, GridItem } from "@chakra-ui/react";
import Dashboardlayout from "../../components/Dashboardlayout";
import MainIntro from "./components/MainIntro";
import Pricing from "./components/Pricing";
import Transactioncomponent from "./components/Transactioncomponent";
import InfoCard from "./components/InfoCard";


const Dashboard = () => {
  return (
    <Dashboardlayout title="Dashboard">
      <Grid gridTemplateColumns={{
        base: 'repeat(1, 1fr)',
        xl: 'repeat(2, 1fr)',
      }} 
      gap={6}>
        <GridItem colSpan={{
          base: '1',
          xl: '2'
        }}>
          <MainIntro />
        </GridItem>
        <GridItem colSpan='1' >
          <Pricing />
        </GridItem>
        <GridItem colSpan='1' >
          <Transactioncomponent/>
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dotbg.svg"
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            tagText="Contact"
            imgUrl="/gridbg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  );
};

export default Dashboard;
