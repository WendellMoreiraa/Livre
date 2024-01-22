import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ICard } from "./types";
import BuySucess from "src/components/BuySucess";

const Cards: ICard = ({ img, name, description, ticketPrice }) => {
  const { colorMode } = useColorMode();
  return (
    <Card boxShadow="md" mt={"15px"} bgColor={"gray.200"}>
      <CardBody w={"368px"} h={"144"} cursor={"pointer"}>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={{ base: "280px", sm: "328px" }}
          h={"200px"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" color={colorMode === "dark" ? "gray.800" : ""}>
            {name}
          </Heading>
          <Text color={colorMode === "dark" ? "gray.800" : ""}>
            {description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${ticketPrice}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <BuySucess price={3000} />
      </CardFooter>
    </Card>
  );
};
export default Cards;
