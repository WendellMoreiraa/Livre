import { Flex, useColorMode } from "@chakra-ui/react";
import Header from "../../components/Header";
import ToTravel from "./components/toTravel/index";
import PointTour from "./components/PointTour";
import Footer from "./components/Footer";

const HomePage = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bgColor={colorMode === "light" ? "gray.500" : "gray.800"}
      h={"100%"}
      direction={"column"}
    >
      <Header />
      <ToTravel />
      <PointTour />
      <Footer />
    </Flex>
  );
};

export default HomePage;
