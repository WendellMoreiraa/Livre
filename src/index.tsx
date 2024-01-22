import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import { theme } from "./styles/theme";

import { QueryClientProvider, queryClient } from "./utils/queryConfig";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
