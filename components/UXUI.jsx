import { Box, Icon, Code } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/color-mode";
import { BiDesktop } from "react-icons/bi";

export default function UXUI() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      className="services_card"
      bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
      borderWidth={colorMode === "dark" ? "0px" : "1px"}
      pb={'5'}
    >
      <div className="services_card_title">
        <h2>UX/UI Design</h2>
      </div>
      <Box className="icons_shopify_woocommerce">
        <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#17cf97" : "#caece2"} p={'.2em .4em'} borderRadius={'5px'}>
          <Icon mr={2} className="ux-ui-icons" as={BiDesktop} />
          Usability
        </Code>

        <Code fontSize={'13px'} mr={3} display={'flex'} fontWeight={'600'} bg={colorMode === "dark" ? "#17cf97" : "#caece2"} p={'.2em .4em'} borderRadius={'5px'}>
          <Icon mr={2} className="ux-ui-icons" as={BsFillPersonLinesFill} />
          Experience
        </Code>
      </Box>

      <h2 className="services_card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis accusantium sit illo neque rem omnis quaerat, nam
        similique vitae delectus ad magni vel quo maxime, magnam placeat.
        Reprehenderit, distinctio aliquam?
      </h2>
    </Box>
  );
}
