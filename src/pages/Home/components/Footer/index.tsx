import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import Logo from "../../../../assets/img/logo.svg";
import { Flex, Icon, Image, Text, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bgColor={colorMode === "light" ? "gray.400" : "gray.800"}
      width={"100%"}
      h={"437px"}
      mt={"20px"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      direction={{ base: "column", sm: "column", md: "row" }}
      borderTop={{ base: "1px solid #FFFFFF", md: "none" }}
      marginTop={{ base: "60px", md: "0px" }}
    >
      <Flex
        direction={{ sm: "row", md: "column" }}
        justifyContent={"center"}
        textAlign={{ base: "center" }}
        gap={3}
        display={{ base: "none", md: "flex" }}
      >
        <Text fontSize={"24px"} color={"primary.100"} fontWeight={"bold"}>
          Contatos
        </Text>
        <Flex alignItems={"center"} gap={3}>
          <Icon as={PhoneIcon} />{" "}
          <Text fontWeight={"600"}>0800 222 552 812</Text>
        </Flex>
        <Flex alignItems={"center"} gap={3}>
          <Icon as={PhoneIcon} />{" "}
          <Text fontWeight={"600"}>(11) 412 7822 6622</Text>
        </Flex>
        <Flex alignItems={"center"} gap={3}>
          <Icon as={EmailIcon} />{" "}
          <Text fontWeight={"600"}>contato@airlines</Text>
        </Flex>
        <Flex alignItems={"center"} gap={3}>
          <Icon as={InfoIcon} /> <Text fontWeight={"600"}>São Paulo</Text>
        </Flex>
      </Flex>
      <Flex direction={"column"} alignItems={"center"} gap={5}>
        <Image src={Logo} w={"153px"} marginBottom={"20px"} />
        <Text fontSize={"18px"} fontWeight={"600"}>
          Voando além das expectativas, conectando sonhos e destinos.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
