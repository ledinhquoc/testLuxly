import { Box } from "@chakra-ui/react";

import Login from "lib/components/samples/Login";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Login />

      {/* <Box>
        <SomeText />
        <CTASection />
      </Box> */}
    </Box>
  );
};

export default Home;
