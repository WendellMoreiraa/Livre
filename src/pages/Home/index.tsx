import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import ToTravel from "./components/toTravel/index";

const HomePage = () => {
  return (
    <Flex bgColor={"gray.500"} h={"100vh"} direction={"column"}>
      <Header />
      <ToTravel />
    </Flex>
  );
};

export default HomePage;
