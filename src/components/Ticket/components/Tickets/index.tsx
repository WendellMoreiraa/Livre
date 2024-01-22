// Tickets.tsx

import { Flex, Icon, Text } from "@chakra-ui/react";
import { Itickets } from "./types";
import { ArrowRightIcon } from "@chakra-ui/icons";
import BuySucess from "src/components/BuySucess";

const Tickets: Itickets = ({
  data,
  price,
  hourDisembarkation,
  hourboarding,
}) => {
  return (
    <Flex border={"1px solid #1976D2 "} cursor={"pointer"}>
      <Flex direction={"column"} w={"100%"}>
        <Flex
          padding={"20px"}
          justifyContent={"space-between"}
          borderBottom={"1px solid #1976D2"}
          _hover={{ bgColor: "gray.300" }}
        >
          <Text fontSize={"20px"} color={"primary.100"} fontWeight={"900"}>
            IDA
          </Text>
          <Flex
            alignItems={"center"}
            gap={5}
            justifyContent={"center"}
            w={"100%"}
            fontSize={"18px"}
            marginRight={"20px"}
            fontWeight={700}
          >
            <Text>{data.origin}</Text>
            <Icon as={ArrowRightIcon} />
            <Text>{data.destination}</Text>
          </Flex>
          <Text fontSize={"20px"} color={"primary.100"} fontWeight={"900"}>
            VOLTA
          </Text>
        </Flex>
        <Flex
          p={"20px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          _hover={{ bgColor: "gray.300" }}
        >
          <Flex direction={"column"}>
            <Text color={"primary.100"}>Azul</Text>
            <Text fontWeight={600} fontSize={"12px"}>
              Companhia
            </Text>
          </Flex>

          <Flex
            alignItems={"center"}
            gap={5}
            justifyContent={"center"}
            w={"100%"}
          >
            <Flex direction={"column"}>
              <Text fontSize={"22px"}>{hourboarding}</Text>
              <Text fontSize={"12px"}>Embarque</Text>
            </Flex>

            <Icon as={ArrowRightIcon} color={"primary.100"} />
            <Flex direction={"column"}>
              <Text fontSize={"22px"}>{hourDisembarkation}</Text>
              <Text fontSize={"12px"}>Desembarque</Text>
            </Flex>
          </Flex>

          <BuySucess price={price} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Tickets;
