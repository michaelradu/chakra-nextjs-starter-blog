import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Text, Code, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";


export default function ProyectoViabler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title="My Project"
      description="Markdown Blog & Portfolio Starter"
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box className="container_article"
        >
          <Heading as={'h1'}>
            Local Store: An online e-commerce marketplace
          </Heading>
          <Box my={6} display={'flex'}>
            <Image
              className="project-image"
              src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='Project Image'
            />
          </Box>
          <Heading as={'h2'} fontSize={'24px'}>
            First impressions
          </Heading>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={'10px'}
            p={'20px 15px'}
            mt={'15px'}
            mb={'40px'}
            pr={4}
          >
            <Box display={'flex'} mb={3}>
              <Text fontSize={'1.1rem'} mr={2}>
                🎨
              </Text>
              <Text fontSize={'1.1rem'} mb={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat.
              </Text>
            </Box>
            <Box display={'flex'} mb={3}>
              <Text fontSize={'1.1rem'} mr={2}>
                📆
              </Text>
              <Text fontSize={'1.1rem'} mb={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat.
              </Text>
            </Box>
            <Box display={'flex'}>
              <Text fontSize={'1.1rem'} mr={2}>
                🛒
              </Text>
              <Text fontSize={'1.1rem'} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat.
              </Text>
            </Box>
          </Box>

          <Heading as={'h2'} fontSize={'24px'}>
            What I learned
          </Heading>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={'10px'}
            p={'20px 15px'}
            mt={'15px'}
            mb={'40px'}
            pr={4}
          >
            <Box display={'flex'} mb={3}>
              <Text fontSize={'1.1rem'} mr={2}>
                ⚡️
              </Text>
              <Text fontSize={'1.1rem'} mb={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat.
              </Text>
            </Box>
            <Box display={'flex'} mb={3}>
              <Text fontSize={'1.1rem'} mr={2}>
                ⚡️
              </Text>
              <Text fontSize={'1.1rem'} mb={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat.
              </Text>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Layout>
  );
}