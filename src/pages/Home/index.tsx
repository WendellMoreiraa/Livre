import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import ToTravel from "./components/toTravel/index";
import PointTour from "./components/PointTour";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <Flex bgColor={"gray.500"} h={"100%"} direction={"column"}>
      <Header />
      <ToTravel />
      <PointTour />
      <Footer />
    </Flex>
  );
};

export default HomePage;
