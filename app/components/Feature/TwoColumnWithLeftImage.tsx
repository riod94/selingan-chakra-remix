import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoAnalytics, IoSearch, IoBuild, IoPaperPlane } from "react-icons/io5";
import { type ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const blurBackground = `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`;
export default function TwoColumnWithLeftImage() {
  return (
    <Container id="howWeWork" maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        py={{ base: 20, md: 28 }}
        // pb={{ base: 8, md: 10 }}
      >
        <Flex
          maxW={"560px"}
          direction={{ base: "column-reverse", md: "row" }}
          width={"full"}
          rounded={"xl"}
          p={10}
          justifyContent={"space-between"}
          position={"relative"}
          _after={{
            content: '""',
            position: "absolute",
            height: "21px",
            width: "29px",
            left: "35px",
            top: "-10px",
          }}
          _before={{
            content: '""',
            position: "absolute",
            zIndex: "-1",
            height: "full",
            maxW: "560px",
            width: "full",
            filter: "blur(50px)",
            transform: "scale(0.98)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            top: 0,
            left: 0,
            backgroundImage: blurBackground,
          }}
        >
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4} alignContent="center">
          <Heading>How We Works</Heading>
          <Text color={useColorModeValue("gray.600", "gray.500")}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={IoAnalytics} color={"yellow.600"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Product Research"}
            />
            <Feature
              icon={<Icon as={IoSearch} color={"green.600"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Design Thinking"}
            />
            <Feature
              icon={<Icon as={IoBuild} color={"purple.600"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Product Development"}
            />
            <Feature
              icon={<Icon as={IoPaperPlane} color={"cyan.600"} w={5} h={5} />}
              iconBg={useColorModeValue("cyan.100", "cyan.900")}
              text={"Delivery"}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
