import { Button, Box, Icon, UnorderedList, ListItem, Code } from "@chakra-ui/react";
import { FaMobile, FaSearch } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import Link from "next/link";

export default function PaginaWebServicio() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      className="services_card"
      bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
      borderWidth={colorMode === "dark" ? "0px" : "1px"}
    >
      <div className="services_card_title">
        <h2>Web Page</h2>
      </div>
      <Box className="icons_shopify_woocommerce">

        <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#17cf97" : "#caece2"} p={'.2em .4em'} borderRadius={'5px'}>
          <Icon fontSize={'17px'} mr={2} className="mobilefirst-icons" as={FaMobile} />
          Mobile first
        </Code>
        <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#17cf97" : "#caece2"} p={'.2em .4em'} borderRadius={'5px'}>
          <Icon fontSize={'17px'} mr={2} className="mobilefirst-icons" as={FaSearch} />
          SEO
        </Code>
      </Box>

      <h2 className="services_card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis accusantium sit illo neque rem omnis quaerat, nam
        similique vitae delectus ad magni vel quo maxime, magnam placeat.
        Reprehenderit, distinctio aliquam?
      </h2>
      <Box textAlign={"end"} mt={3}>
        <Button
          variant="link"
          color={colorMode === "dark" ? "white" : "#12171e"}
          onClick={onOpen}
          mt={4}
          px={5}
          py={1}
          rightIcon={<ArrowForwardIcon />}
        >
          Find out more
        </Button>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"md"}
        isCentered
        preserveScrollBarGap
      >
        <ModalOverlay />
        <ModalContent
          bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
          borderWidth={colorMode === "dark" ? "4px" : "4px"}
          borderColor={"#17cf97"}
          borderRadius={'20px'}

        >
          <ModalHeader fontSize={"2xl"}>Web Page</ModalHeader>
          <ModalCloseButton fontSize={"md"} color={"#17cf97"} />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis accusantium sit illo neque rem omnis quaerat, nam
            similique vitae delectus ad magni vel quo maxime, magnam placeat.
            Reprehenderit, distinctio aliquam?
            <br></br>
            <br></br>
            Example of list:
            <UnorderedList mt={"2"}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem mt={"1"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
            </UnorderedList>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Link href="mailto:yourmail@gmail.com">
              <a>
                <Button
                  variant={"outline"}
                  borderColor={"#17cf97"}
                  color={"#17cf97"}
                  size={"md"}
                  fontWeight={"bold"}
                >
                  I'm interested!
                </Button>
              </a>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
