import { Flex } from "@chakra-ui/react";
import Ticket from "../../../../components/Ticket";
import BgAero from "../../../../assets/img/aero.svg";

const ToTravel = () => {
  return (
    <Flex
      w={"100%"}
      h={"628px"}
      bgImage={BgAero}
      bgSize={"cover"}
      bgPosition={"center"}
      justifyContent={"center"}
      alignItems={"flex-end"}
    >
      <Ticket />
    </Flex>
  );
};

export default ToTravel;
