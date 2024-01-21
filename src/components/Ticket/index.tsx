import React, { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import LocationInput from "./components/LocationInput";

const Ticket = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = async () => {
    console.log("Pesquisando:", {
      origin,
      destination,
      departureDate,
      returnDate,
    });
  };
  return (
    <Flex direction={"column"} align={"center"} gap={"24px"}>
      <Text alignSelf={"flex-start"} fontSize={"32px"} fontWeight={600}>
        Pesquise a sua viagem
      </Text>

      <Box
        w={"1180px"}
        bgColor={"gray.200"}
        h={"240px"}
        rounded={16}
        marginBottom={"80px"}
        padding={"10px"}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100%"}
        >
          <Flex justifyContent={"center"} h={"100%"} align={"center"} gap={6}>
            <Flex direction="column">
              <Flex>
                <Box>
                  <LocationInput
                    label="Defina sua origem"
                    onSelect={(location) => setOrigin(location)}
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex>
                <Box>
                  <LocationInput
                    label="Defina seu destino"
                    onSelect={(location) => setDestination(location)}
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex direction={"column"}>
              <Text
                color={"primary.200"}
                fontSize={"14px"}
                fontWeight={"600"}
                marginBottom={"6px"}
              >
                Selecione a data de ida
              </Text>
              <Box>
                <Input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  bgColor={"gray.400"}
                  fontSize={"16px"}
                  color={"gray.600"}
                  w={"260px"}
                  border={"1px solid #D0D5DD"}
                />
              </Box>
            </Flex>
            <Flex direction={"column"}>
              <Text
                color={"primary.200"}
                fontSize={"14px"}
                fontWeight={"600"}
                marginBottom={"6px"}
              >
                Selecione a data de volta
              </Text>
              <Box>
                <Input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  bgColor={"gray.400"}
                  fontSize={"16px"}
                  color={"gray.600"}
                  w={"260px"}
                  border={"1px solid #D0D5DD"}
                />
              </Box>
            </Flex>
          </Flex>
          <Button
            onClick={handleSearch}
            colorScheme="teal"
            marginBottom={"8px"}
            alignSelf={"flex-end"}
          >
            Search
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Ticket;
