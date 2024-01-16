import { Box, Flex, Image, Text } from "@chakra-ui/react";
import InputLogin from "./componets/inputLogin";

import logo from "../../assets/img/logo.svg";
import bgCloud from "../../assets/img/bgCloud.png";

const Login = () => {
  return (
    <Flex
      w="100%"
      height="100vh"
      bgImage={bgCloud}
      bgSize={"cover"}
      bgColor={"black"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        bgColor="#FFFF"
        w={780}
        h={600}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
        padding={"0px 150px"}
        borderRadius={16}
      >
        <Image src={logo} boxSize={100} />
        <Box>
          <Text fontSize={32} fontWeight={"600"} textAlign={"center"}>
            Bem-vindo a bordo!
          </Text>
          <Text fontSize={24} fontWeight={"600"}>
            Faça login para decolar conosco.
          </Text>
        </Box>

        <Box marginBottom={6}>
          <InputLogin />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
