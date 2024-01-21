import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ICard } from "./types";

const Cards: ICard = ({ img, name, description, ticketPrice }) => {
  return (
    <Card boxShadow="md" mt={"15px"} bgColor={"gray.200"}>
      <CardBody w={"368px"} h={"144"} cursor={"pointer"}>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={"328px"}
          h={"200px"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${ticketPrice}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Cards;
