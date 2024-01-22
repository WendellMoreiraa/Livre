import { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import LocationInput from "./components/LocationInput";
import Tickets from "./components/Tickets";

const Ticket = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const searchData = {
    origin,
    destination,
    departureDate,
    returnDate,
  };
  const handleSearch = () => {
    console.log(searchData);
    setIsOpen(true);
  };
  const handleClickOutside = (event: React.MouseEvent | MouseEvent) => {
    if (
      boxRef.current &&
      "contains" in boxRef.current &&
      boxRef.current.contains(event.target as HTMLElement)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Flex
      direction={"column"}
      align={"center"}
      gap={"24px"}
      position={"relative"}
    >
      <Text alignSelf={"flex-start"} fontSize={"32px"} fontWeight={600}>
        Pesquise a sua viagem
      </Text>

      <Box
        ref={boxRef}
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
            width={"118px"}
            h={"48px"}
            fontWeight={"500"}
            fontSize={"14px"}
            marginBottom={"8px"}
            alignSelf={"flex-end"}
          >
            Buscar <Icon ml={"10px"} as={SearchIcon} />
          </Button>
        </Flex>
      </Box>
      {isOpen && (
        <Flex
          w={"1200px"}
          h={"500px"}
          bgColor={"gray.200"}
          position={"absolute"}
          padding={"0 30px"}
          zIndex={"1000"}
          bottom={"-440px"}
          direction={"column"}
          overflowY={"scroll"}
          gap={8}
          boxShadow={"md"}
          borderRadius={"8px"}
        >
          <Text fontSize="24px" fontWeight="bold" mb="4px" mt={"15px"}>
            Resultados da Pesquisa:
          </Text>
          <Tickets
            data={searchData}
            price={300}
            hourboarding={"5:00"}
            hourDisembarkation={"12:00"}
          />
          <Tickets
            data={searchData}
            price={3000}
            hourboarding={"6:00"}
            hourDisembarkation={"13:00"}
          />
          <Tickets
            data={searchData}
            price={100}
            hourboarding={"9:00"}
            hourDisembarkation={"18:00"}
          />
          <Tickets
            data={searchData}
            price={1000}
            hourboarding={"4:00"}
            hourDisembarkation={"11:00"}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default Ticket;
