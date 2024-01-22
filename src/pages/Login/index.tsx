import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import InputLogin from "./componets/inputLogin";

import logo from "../../assets/img/logo.svg";
import bgCloud from "../../assets/img/bgCloud.png";
import SwitchMode from "src/components/SwitchMode";

const Login = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      w="100%"
      height="100vh"
      bgImage={{ base: "", md: bgCloud }}
      bgSize={"cover"}
      bgColor={{ base: "primary.100", md: "black" }}
      alignItems={{ base: "flex-end", md: "center" }}
      justifyContent={"center"}
    >
      <SwitchMode />
      <Flex
        bgColor={colorMode === "light" ? "#FFFF" : "gray.800"}
        w={{ base: "100%", md: 780 }}
        h={{ base: 500, md: 600 }}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
        padding={"0px 150px"}
        borderRadius={{ base: 0, md: 16 }}
      >
        <Image src={logo} boxSize={100} />
        <Box>
          <Text
            fontSize={{ base: 20, md: 32 }}
            fontWeight={"600"}
            textAlign={"center"}
          >
            Bem-vindo a bordo!
          </Text>
          <Text fontSize={{ base: 0, md: 24 }} fontWeight={"600"}>
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
