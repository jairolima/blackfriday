import { Heading, Grid, Flex, Button, Text, Box } from "@chakra-ui/core";
import Discount from '../components/Discount';

const Home: React.FC = () => {

  return (

    <Box bgImage="url('/wave2.svg')" bgSize="100% 100%" bgPos="center" backgroundRepeat="no-repeat">
      <Grid
        as="main"
        height="100vh"
        templateColumns="1fr 480px 800px 1fr"
        templateRows="1fr 480px 1fr"
        templateAreas="
        '. . . .'
        '. blackfriday image .'
        '. . . .'
        "
        justifyContent="center"
        alignItems="center"
      >
        <Flex gridArea="blackfriday" flexDir="column" alignItems="flex-start">
          {/* <img src="vercel.svg" alt="Vercel" /> */}
          <Heading size="2xl" lineHeight="shorter" fontWeight="medium" color="blue.400">Black Friday</Heading>
          <Heading size="2xl" lineHeight="shorter" marginTop={0} color="blue.800">Discount</Heading>
          <Heading size="md" lineHeight="shorter" fontWeight="medium" marginTop={0} color="gray.600">Landing Page</Heading>
          <Text fontSize="xsm" marginTop={6} color="gray.600">
            The Black Friday sale is coming soon with the best 2020 Black Friday deals, use
            discount code: <b>SAVE70</b>
          </Text>


          <Flex flexDir="row" justifyContent="space-between" marginTop={16}>
            <Button backgroundColor="blue.700" color="white" >
              Get Started
        </Button>
            <Button marginLeft={4} variantColor="blue" color="blue.700" variant="outline">
              Free Trial 30 days
        </Button>

          </Flex>


        </Flex>


        <Flex gridArea="image">
          <Discount />
          {/* <img src="discount.svg" alt="discount" /> */}
        </Flex>



      </Grid>

    </Box>

  )
}


export default Home;