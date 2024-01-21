import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Logo from "../../assets/img/logo.svg";
const Header = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-around"}
      h={"80px"}
      w={"100%"}
      bgColor={"gray.200"}
    >
      <Box>
        <Image src={Logo} alt="logo" />
      </Box>
      <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
        <Link _hover={{ color: "primary.100" }}>Início</Link>
        <Link _hover={{ color: "primary.100" }}>Passagens</Link>
        <Link _hover={{ color: "primary.100" }}>Pontos Turísticos</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
