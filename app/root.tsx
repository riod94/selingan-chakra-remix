import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Box, ChakraProvider, extendTheme, Heading } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Selingan",
  viewport: "width=device-width,initial-scale=1",
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "#322659",
    800: "#44337A",
    700: "#553C9A",
    600: "#6B46C1",
    500: "#805AD5",
    400: "#9F7AEA",
    300: "#B794F4",
    200: "#D6BCFA",
    100: "#E9D8FD",
    50: "#FAF5FF",
  },
};

const theme = extendTheme({ colors, config });

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ChakraProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Box>
            <Heading as="h1">There was an error</Heading>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  return (
    <html>
      <head>
        <title>{`${caught.status} ${caught.statusText}`}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Box>
            <Heading as="h1">
              {caught.status} {caught.statusText}
            </Heading>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
