import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import LocationInput from "./components/LocationInput";
import Tickets from "./components/Tickets";

const Ticket = () => {
  const { colorMode } = useColorMode();
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
      <Text
        alignSelf={{ base: "center", md: "flex-start" }}
        fontSize={{ base: "26px", md: "32px" }}
        fontWeight={600}
        color={colorMode === "light" ? "gray.800" : "black"}
      >
        Pesquise a sua viagem
      </Text>

      <Box
        ref={boxRef}
        w={{ base: "100%", sm: "100%", md: "70%", lg: "100%" }}
        bgColor={colorMode === "light" ? "gray.200" : "gray.800"}
        h={{ base: "100%", md: "240px" }}
        rounded={{ md: "16px" }}
        marginBottom={{ base: "20px", md: "80px" }}
        padding={"10px"}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          h={{ md: "100%", lg: "240px" }}
        >
          <Flex
            justifyContent={"center"}
            h={"100%"}
            align={"center"}
            gap={6}
            wrap={"wrap"}
          >
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
                color={colorMode === "light" ? "primary.200" : "gray.200"}
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
                color={colorMode === "light" ? "primary.200" : "gray.200"}
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
            width={{ b: "100px", md: "118px" }}
            h={"48px"}
            fontWeight={"500"}
            fontSize={"14px"}
            mt={{ base: "10px", md: 0 }}
            marginBottom={{ base: 0, md: "20px" }}
            alignSelf={{ base: "center", md: "flex-end" }}
          >
            Buscar <Icon ml={"10px"} as={SearchIcon} />
          </Button>
        </Flex>
      </Box>
      {isOpen && (
        <Flex
          w={"100%"}
          h={{ sm: "400px", md: "500px" }}
          bgColor={colorMode === "light" ? "gray.200" : "gray.800"}
          position={"absolute"}
          padding={"0 30px"}
          zIndex={"1000"}
          bottom={{ sm: "-396px", md: "-440px" }}
          direction={"column"}
          overflowY={"scroll"}
          gap={8}
          boxShadow={"md"}
          borderRadius={{ sm: "0", md: "8px" }}
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
