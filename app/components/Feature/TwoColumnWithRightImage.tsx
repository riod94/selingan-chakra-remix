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
import {
  IoLogoAndroid,
  IoLogoApple,
  IoLogoWebComponent,
} from "react-icons/io5";
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

const blurBackground = `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`;

export default function TwoColumnWithRightImage() {
  return (
    <Container id="whatWeBuild" maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        py={{ base: 20, md: 28 }}
      // pt={{ base: 8, md: 10 }}
      >
        <Stack spacing={4} alignContent="center">
          <Heading>What We Build</Heading>
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
              icon={<Icon as={IoLogoAndroid} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Android Apps"}
            />
            <Feature
              icon={<Icon as={IoLogoApple} color={useColorModeValue("gray.600", "gray.500")} w={5} h={5} />}
              iconBg={useColorModeValue("gray.100", "gray.900")}
              text={"Ios Apps"}
            />
            <Feature
              icon={
                <Icon as={IoLogoWebComponent} color={"blue.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("blue.100", "blue.900")}
              text={"Web Apps"}
            />
          </Stack>
        </Stack>
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
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
