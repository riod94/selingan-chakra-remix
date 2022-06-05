import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  createIcon,
  useColorModeValue,
  useDisclosure,
  Fade,
  ScaleFade,
  SlideFade,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { useEffect } from "react";
import BlurBackground from "../BlurBackground";

export default function Hero() {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
    return () => {
      onToggle();
    };
  }, []);

  return (
    <Container maxW={"6xl"}>
      <Stack
        align={"center"}
        spacing={8}
        py={20}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} mt={{ base: 24, md: 40 }} mb={{ base: 20, md: 24 }}>
          <ScaleFade initialScale={0.6} in={isOpen}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                color={"pink.400"}
                fontSize="6xl"
                fontWeight="extrabold"
              >
                Hello, Everyone!
              </Text>
              <br />
              <Text as={"span"} fontSize="6xl" fontWeight="extrabold">
                Welcome to{" "}
                <Text
                  as={"span"}
                  bgClip={"text"}
                  bgGradient={useColorModeValue(
                    "linear(to-r, #44337A, #9F7AEA)",
                    "linear(to-r, #FAF5FF, #9F7AEA)"
                  )}
                >
                  Selingan
                </Text>
              </Text>
            </Heading>
          </ScaleFade>
          <ScaleFade in={isOpen} initialScale={0.9} delay={0.1}>
            <Text color={useColorModeValue("gray.600", "gray.500")}>
              Selingan is a landing page template built using Remix + Chakra UI.
              You can modify and use it for your commercial website for free. In
              hac habitasse platea dictumst quisque sagittis. Convallis tellus
              id interdum velit. Feugiat vivamus at augue eget arcu dictum
              varius duis. All that is free!
            </Text>
          </ScaleFade>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <ScaleFade in={isOpen} initialScale={0.3} delay={0.3}>
              <Link to={"#whyChooseUs"}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme={"brand"}
                  bg={"brand.400"}
                  _hover={{ bg: "brand.500" }}
                >
                  Get started
                </Button>
              </Link>
            </ScaleFade>
            <ScaleFade in={isOpen} initialScale={0.4} delay={0.4}>
              <Link to={"#howWeWork"}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
                >
                  How It Works
                </Button>
              </Link>
            </ScaleFade>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Fade in={isOpen} delay={0.2}>
            <BlurBackground
              position={"absolute"}
              top={-10}
              right={5}
              style={{ filter: "blur(90px)" }}
            />
          </Fade>
          <SlideFade in={isOpen} offsetX={"100px"} delay={0.5}>
            <Box
              position={"relative"}
              top={10}
              height={"320px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"fill"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                // src={"images/website-building.svg"}
                src={
                  "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
              />
            </Box>
          </SlideFade>
        </Flex>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});
