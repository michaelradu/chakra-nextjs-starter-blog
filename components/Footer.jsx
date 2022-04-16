import Link from "next/link";
import { GrTwitter, GrGithub, GrLinkedinOption, GrMedium } from "react-icons/gr";
import { Box, Text, HStack, Icon, } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

export default function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack
            as={"footer"}
        >
            <Box
                pt={20}
                pb={10}
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                maxWidth={'800px'}
                ml={'auto'}
                mr={'auto'}
            >
                <Box
                    display={'flex'}
                    fontSize={'18px'}
                    bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
                    borderWidth={colorMode === "dark" ? "0px" : "1px"}
                    p={'10px 15px'}
                    borderRadius={'10px'}
                >
                    <Text as={'h5'} mr={4}>
                        Stay connected 👉
                    </Text>
                    <Box mr={3}>
                        <a href="#" target="_blank" rel="noreferrer">
                            <Icon as={GrTwitter} />
                        </a>
                    </Box>

                    <Box mr={3}>
                        <a href="https://github.com/michaelradu" target="_blank" rel="noreferrer">
                            <Icon as={GrGithub} />
                        </a>
                    </Box>

                    <Box mr={3}>
                        <a href="#" target="_blank" rel="noreferrer">
                            <Icon as={GrLinkedinOption} />
                        </a>
                    </Box>

                    <Box >
                        <a href="#" target="_blank" rel="noreferrer">
                            <Icon as={GrMedium} />
                        </a>
                    </Box>
                </Box>
            </Box>
        </HStack>
    )
}