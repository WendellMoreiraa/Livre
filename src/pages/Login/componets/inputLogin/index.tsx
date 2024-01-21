import { useState } from "react";
import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate } from "react-router-dom"; // Importe Redirect e Route
import { IFormInput } from "./types";
import { shemasLogin } from "../../../../shemas";

const InputLogin = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(shemasLogin) });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Simula a autenticação bem-sucedida
    if (data.email === "usuario@exemplo.com" && data.password === "senha123") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const handlePasswordLook = () => {
    setIsInputOpen(!isInputOpen);
  };

  if (isAuthenticated) {
    // Use o componente Redirect para redirecionar para a rota desejada
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={"column"} gap={5} width={"456px"}>
        <Flex direction={"column"} gap={2}>
          <Text fontSize={"14px"} fontWeight={500}>
            E-mail
          </Text>
          <Input
            type={"email"}
            w={"100%"}
            fontSize={"14px"}
            {...register("email")}
          />
          {errors.email && (
            <Text color="red" fontSize="12px">
              {errors.email.message}
            </Text>
          )}
        </Flex>
        <Flex position={"relative"} direction={"column"} gap={2}>
          <Text fontSize={"14px"} fontWeight={500}>
            Senha
          </Text>
          <Input
            type={isInputOpen ? "text" : "password"}
            w={"100%"}
            fontSize={"14px"}
            {...register("password")}
          />
          <Icon
            as={isInputOpen ? UnlockIcon : LockIcon}
            position={"absolute"}
            top={10}
            right={4}
            onClick={handlePasswordLook}
            color={"gray.600"}
          />
          {errors.password && (
            <Text color="red" fontSize="12px">
              {errors.password.message}
            </Text>
          )}
        </Flex>
        <Button type="submit" width={"100%"} height={"48px"}>
          Entrar
        </Button>
      </Flex>
    </form>
  );
};

export default InputLogin;
