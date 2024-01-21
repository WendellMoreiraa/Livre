import { Flex } from "@chakra-ui/react";
import Cards from "./components/Cards";
import { capitais } from "./components/Cards/mock";

const PointTour = () => {
  return (
    <Flex
      wrap={"wrap"}
      gap={5}
      justifyContent={"center"}
      padding={"0px 60px"}
      mt="50px"
    >
      {capitais.map((capital, index) => (
        <Cards
          key={index}
          name={capital.nome}
          description={capital.descricao}
          img={capital.fotoUrl}
          ticketPrice={capital.valorPassagem}
        />
      ))}
    </Flex>
  );
};

export default PointTour;
