import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "gray.400",
  },
  variants: {
    solid: {
      bg: "primary.100",
      fontSize: 16,
      color: "gray.400",
      _hover: {
        bg: "primary.300",
      },
    },
  },
});

const Input = defineStyleConfig({
  baseStyle: {
    border: "1px solid",
    borderColor: "gray.300",
    paddingInlineStart: "0.5rem",
    boxShadow: "0 1px 2px   0 #98A2B324",
    fontSize: "14px",
    fontWeight: "400",
    color: "gray.500",

    _active: { boxShadow: "0 0 0 0.20rem #98A2B324" },
  },
});

const components = {
  Input,
  Button,
};

export default components;
