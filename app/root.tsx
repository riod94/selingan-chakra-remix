import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Box, Button, ChakraProvider, extendTheme, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";
import { SEO_TITLE, SEO_DESCRIPTION, SEO_KEYWORDS } from "./contants";
import { type ReactNode } from "react";
import ByTheRoad from '../public/images/by-the-road.svg';
import Confetti from '../public/images/confetti.svg';

export let meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
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

interface RootDefaultProps {
  title?: string,
  children: ReactNode;
}
const RootDefault = ({ title, children }: RootDefaultProps) => {
  console.info(meta)

  return (
    <html lang="en">
      <head>
        <title>{title ?? SEO_TITLE}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          {children}
          <LiveReload />
        </ChakraProvider>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <RootDefault>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </RootDefault>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error)
  return (
    <RootDefault title="Oh no!">
      <Box textAlign="center" py={20}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, brand.400, brand.600)"
          backgroundClip="text">
          Oh no!
        </Heading>

        <Heading as="h1" color={"gray.500"} mb={10}>There was an error</Heading>

        <Link
          to={"/"}
        >
          <Button
            colorScheme="brand"
            bgGradient="linear(to-r, brand.400, brand.500, brand.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </RootDefault>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  let title = `${caught.status} ${caught.statusText}`

  return (
    <RootDefault title={title}>
      <Flex
        minH={"100vh"}
        bg={useColorModeValue('#f1f1f1', 'gray.800')}
        align="center"
        justify="center"
        css={{
          backgroundImage: `url("${Confetti}")`,
          backgroundAttachment: 'fixed',
        }}
      >
        <Box textAlign="center" py={10} px={6}>
          <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, brand.400, brand.600)"
            backgroundClip="text">
            {caught.status}
          </Heading>

          <Heading color={"gray.500"} fontSize={28} mt={3} mb={10}>
            {caught.statusText}
          </Heading>

          <Image src={ByTheRoad} alt="by-the-road" height={"50vh"} mb={10} />

          <Link
            to={"/"}
          >
            <Button
              colorScheme="brand"
              bgGradient="linear(to-r, brand.400, brand.500, brand.600)"
              color="white"
              variant="solid"
            >
              Go to Home
            </Button>
          </Link>

        </Box>
      </Flex>
    </RootDefault >
  );
}
