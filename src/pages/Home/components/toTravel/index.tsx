import { Flex } from "@chakra-ui/react";
import Ticket from "../../../../components/Ticket";
import BgAero from "../../../../assets/img/aero.svg";

const ToTravel = () => {
  return (
    <Flex
      w={"100%"}
      h={"628px"}
      bgImage={{ base: "", lg: BgAero }}
      bgSize={"cover"}
      bgPosition={"center"}
      justifyContent={"center"}
      bgColor={{ base: "primary.100" }}
      alignItems={{ base: "center", md: "flex-end" }}
    >
      <Ticket />
    </Flex>
  );
};

export default ToTravel;
