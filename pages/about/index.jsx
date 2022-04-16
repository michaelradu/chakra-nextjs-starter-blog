import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Divider, Text, Code, UnorderedList, ListItem, List, ListIcon, Tag } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MdCheckCircle, MdInfoOutline } from "react-icons/md"

export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title="About Me"
      description="Markdown Blog & Portfolio Starter"
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box
          pl={1}
          pr={1}
        >
          <Heading
            as="h1"
            fontSize={["30px", "60px"]}
            fontWeight={"bold"}
            mt={12}
            mb={12}
            textAlign={"left"}
          >
            About
          </Heading>
          <Box
            mt={5}
            mb={5}
          >
            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
            >
              👨‍💻 UI/UX Frontend developer
            </Heading>

            <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
            <Box>
              <Text fontSize={'1.1rem'} mb={4}>
                I always develop projects with a focus on{' '}
                <Code
                  fontWeight={'600'}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={'.2em .4em'}
                  borderRadius={'5px'}
                >
                  user experience
                </Code>,{' '}
                <Code
                  fontWeight={'600'}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={'.2em .4em'}
                  borderRadius={'5px'}
                >
                  usability
                </Code>
                and{' '}
                <Code
                  fontWeight={'600'}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={'.2em .4em'}
                  borderRadius={'5px'}
                >
                  design.
                </Code>
              </Text>
              <Text fontSize={'1.1rem'} mb={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat. Reprehenderit, distinctio aliquam?
              </Text>
            </Box>

            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={'52px'}
            >
              🎖 Skills
            </Heading>

            <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />

            <UnorderedList pl={2} spacing={2}>
              <ListItem fontSize={'1.1rem'} >Lorem ipsum</ListItem>
              <ListItem fontSize={'1.1rem'} >Lorem ipsum</ListItem>
              <ListItem fontSize={'1.1rem'} >Lorem ipsum</ListItem>
              <ListItem fontSize={'1.1rem'} >Lorem ipsum</ListItem>
            </UnorderedList>

            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={10}
            >
              👨‍🚀 Technologies
            </Heading>
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={'10px'}
              p={'20px 15px'}
            >
              <List>
                <ListItem fontSize={'1.1rem'}>
                  <ListIcon as={MdCheckCircle} color="#4e77f9" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
              </List>
            </Box>

            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={8}
            >
              ⚙️ Tools
            </Heading>
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={'10px'}
              p={'20px 15px'}
            >
              <List>
                <ListItem fontSize={'1.1rem'}>
                  <ListIcon as={MdCheckCircle} color="#4e77f9" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
              </List>
            </Box>

            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={'52px'}
            >
              📋 About me
            </Heading>

            <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />

            <Box>
              <Text fontSize={'1.1rem'} mb={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat. Reprehenderit, distinctio aliquam?
              </Text>
            </Box>

            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={'52px'}
            >
              🌍 Hobbies
            </Heading>

            <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={'10px'}
              p={'20px 15px'}
            >
              <Box display={'flex'}>
                <Text fontSize={'1.1rem'} mr={2}>
                  💪
                </Text>
                <Text fontSize={'1.1rem'} mb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>

              <Box display={'flex'}>
                <Text fontSize={'1.1rem'} mr={2}>
                  🌿
                </Text>
                <Text fontSize={'1.1rem'} mb={1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            </Box>

            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={'52px'}
            >
              ⚡ Fun fact
            </Heading>

            <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />

            <Box>
              <Text fontSize={'1.1rem'} mb={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat. Reprehenderit, distinctio aliquam?
              </Text>
            </Box>

            <Heading
              as="h2"
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={'52px'}
            >
              📫 Contact
            </Heading>

            <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={'10px'}
              p={'20px 15px'}
            >
              <Box display={'flex'}>
                <Text fontSize={'1.1rem'} mr={2}>
                  🤙
                </Text>
                <Text fontSize={'1.1rem'} mb={1}>
                  Thanks for taking an interest in me. If you wish to contact me, you can do it <Link href='/contact'><a><Code fontWeight={'600'} bg={'#4e77f9'} color={"white"} p={'.2em .4em'} borderRadius={'5px'}>here</Code></a></Link>.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Layout>
  );
}
