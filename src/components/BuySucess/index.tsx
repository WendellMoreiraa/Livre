import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Ibuy } from "./type";

const BuySucess: Ibuy = ({ price }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>${price}</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Obrigado pela compra !</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>
              Seu comprovante e seu ticket chegaram por email, obrigado por
              confiar em nossos serviços. Espero que sejamos livre de novo.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuySucess;
