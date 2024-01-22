import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Switch, useColorMode } from "@chakra-ui/react";

const SwitchMode = () => {
  const { toggleColorMode } = useColorMode();
  const { colorMode } = useColorMode();

  return (
    <Switch
      position={"absolute"}
      right={5}
      top={5}
      color={"primary.100"}
      isChecked={localStorage.getItem("chakra-ui-color-mode") === "dark"}
      onChange={() => {
        toggleColorMode();
        localStorage.setItem(
          "chakra-ui-color-mode",
          localStorage.getItem("chakra-ui-color-mode") === "dark"
            ? "light"
            : "dark"
        );
      }}
    >
      {colorMode === "light" ? (
        <SunIcon
          color={"primary.100"}
          position={"absolute"}
          right="12px"
          top="3px"
          fontSize={"13px"}
        />
      ) : (
        <MoonIcon
          color={"gray.600"}
          position={"absolute"}
          right="24px"
          top="2px"
        />
      )}
    </Switch>
  );
};

export default SwitchMode;
