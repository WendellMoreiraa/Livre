import { Box, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import Logo from "../../assets/img/logo.svg";
import SwitchMode from "../SwitchMode";
const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-around"}
      h={"80px"}
      w={"100%"}
      bgColor={colorMode === "light" ? "gray.200" : "gray.800"}
    >
      <Box>
        <Image src={Logo} alt="logo" />
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
        display={{ base: "none", md: "flex" }}
      >
        <Link _hover={{ color: "primary.100" }}>Início</Link>
        <Link _hover={{ color: "primary.100" }}>Passagens</Link>
        <Link _hover={{ color: "primary.100" }}>Pontos Turísticos</Link>
      </Flex>
      <SwitchMode />
    </Flex>
  );
};

export default Header;
