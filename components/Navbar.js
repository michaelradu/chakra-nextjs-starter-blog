import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import { HamburgerIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";

import Link from "next/link";
import { GrGithub, GrMedium } from "react-icons/gr";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <a>
                <Image
                  width={"48px"}
                  height={"48px"}
                  priority
                  src="/img/logoipsum-logo.svg"
                  alt="Avatar"
                />
              </a>
            </Link>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              mr={5}
              spacing={5}
              display={{ base: "none", md: "flex" }}
            >
              <Link href="/">
                <a className="navbar-titles">Home</a>
              </Link>
              <Link href="/about">
                <a className="navbar-titles">About</a>
              </Link>

              <Link href="/projects">
                <a className="navbar-titles">Projects</a>
              </Link>

              <Link href="/blog">
                <a className="navbar-titles">Blog</a>
              </Link>
            </HStack>
            <Link href="mailto:yourmail@gmail.com">
              <a>
                <Button
                  variant={"outline"}
                  borderColor={"#17cf97"}
                  color={"#17cf97"}
                  size={"sm"}
                  mr={4}
                  leftIcon={<EmailIcon />}
                >
                  Contact
                </Button>
              </a>
            </Link>

            <DarkModeSwitch />

            <IconButton
              size={"sm"}
              ml={"4"}
              variant={"outline"}
              borderColor={"#17cf97"}
              color={"#17cf97"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box align="right" pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/">
                <a className="navbar-titles">Home</a>
              </Link>

              <Link href="/about">
                <a className="navbar-titles">About</a>
              </Link>

              <Link href="/projects">
                <a className="navbar-titles">Projects</a>
              </Link>

              <Link href="/blog">
                <a className="navbar-titles">Blog</a>
              </Link>
              <div>
                <a
                  className="social-footer"
                  href="https://github.com/michaelradu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={GrGithub} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={GrMedium} />
                </a>
              </div>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
