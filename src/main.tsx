import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Box, ChakraProvider } from "@chakra-ui/react";
import TodoProvider from "./hooks/useTodo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Box background="gray.200">
        <TodoProvider>
          <App />
        </TodoProvider>
      </Box>
    </ChakraProvider>
  </StrictMode>
);
