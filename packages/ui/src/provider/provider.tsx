"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme/theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
}
