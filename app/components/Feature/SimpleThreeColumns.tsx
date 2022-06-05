import { type ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Center, Container, Heading } from "@chakra-ui/layout";
import { IoAirplane, IoSync, IoSettings } from "react-icons/io5";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Center>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
          alignItems={"center"}
        >
          {icon}
        </Flex>
      </Center>
      <Center>
        <Text fontWeight={600}>{title}</Text>
      </Center>
      <Center>
        <Text color={useColorModeValue("gray.600", "gray.500")} align={"center"}>
          {text}
        </Text>
      </Center>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box id="whyChooseUs" backgroundColor={ useColorModeValue("gray.50", "gray.900")}>
      <Container maxW={"6xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 20, md: 28 }}
        >
          <Box>
            <Center>
            <Heading py={5}>Why Choose Us?</Heading>
            </Center>
            <Center>
              <Text color={useColorModeValue("gray.600", "gray.500")} align={"center"}>
                Blandit turpis cursus in hac habitasse platea dictumst quisque
                sagittis.
              </Text>
            </Center>
          </Box>
        </Stack>

        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={IoSettings} w={10} h={10} color={"yellow.600"} />}
                title={"Customizable"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
              <Feature
                icon={<Icon as={IoSync} w={10} h={10} color={"green.600"} />}
                title={"Reliable"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
              <Feature
                icon={<Icon as={IoAirplane} w={10} h={10} color={"blue.600"} />}
                title={"Instant Delivery"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
