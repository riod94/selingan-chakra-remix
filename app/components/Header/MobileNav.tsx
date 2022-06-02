import type { SyntheticEvent } from "react";
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { NAV_ITEMS } from "./navData";
import type { NavItem } from "./navData";

interface MobileNavProps {
  isOpen: boolean;
}

export const MobileNav = ({ isOpen }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <Stack
      p={4}
      display={{ md: "none" }}
      zIndex={9999}
      pos="fixed"
      top="60px"
      w={"full"}
      bg={"white"}
      minH={"calc(100vh - 60px)"}
      css={{
        backdropFilter: "saturate(180%) blur(5px)",
        backgroundColor: useColorModeValue("white", "gray.800"),
      }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ href, children, label }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleToggle = (e: SyntheticEvent) => {
    if (children) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <Stack spacing={4} onClick={handleToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};