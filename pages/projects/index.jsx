import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Text, Code, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";


export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title="Portfolio"
      description="Markdown Blog & Portfolio Starter"
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Heading
          as="h1"
          fontSize={["30px", "60px"]}
          fontWeight={"bold"}
          mt={12}
          textAlign={"left"}
        >
          Projects
        </Heading>
        <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
          mt={'30px'}
          mb={'40px'}
        >
          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
              💻
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
        >
          <Box
            width={['100%', '48%']}
            borderRadius={'10px'}
            mb={7}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"}
          >
            <Link href='/projects/local-store'>
              <a>
                <Image
                  className="blogs-page_box_article-card_img"
                  borderRadius={'10px 10px 0px 0px'}
                  src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="E-commerce"
                />
                <Heading
                  as="h2"
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                >
                  🎨 Local store
                </Heading>
                <Box display={'flex'} ml={3} mt={3} mb={5}>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Wordpress</Code>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Marketplace</Code>
                  <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>UX/UI</Code>
                </Box>
              </a>
            </Link>
          </Box>
          <Box
            width={['100%', '48%']}
            mb={7}
            borderRadius={'10px'}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"}
          >
            <Link href='/projects/portfolio-blog'>
              <a>
                <Image
                  className="blogs-page_box_article-card_img"
                  borderRadius={'10px 10px 0px 0px'}
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="Website"
                />
                <Heading
                  as="h2"
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                >
                  👨‍💻 My portfolio/blog
                </Heading>
                <Box display={'flex'} ml={3} mt={3} mb={5}>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Next.Js</Code>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Markdown</Code>
                  <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Chakra UI</Code>
                </Box>
              </a>
            </Link>
          </Box>
          <Box
            width={['100%', '48%']}
            mb={7}
            borderRadius={'10px'}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"}
          >
            <Link href='/projects'>
              <a>
                <Image
                  className="blogs-page_box_article-card_img"
                  borderRadius={'10px 10px 0px 0px'}
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Website"
                />
                <Heading
                  as="h2"
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                >
                  👨‍🏭 Shop
                </Heading>
                <Box display={'flex'} ml={3} mt={3} mb={5}>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Shopify</Code>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Branding</Code>
                  <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>UX/UI</Code>
                </Box>
              </a>
            </Link>
          </Box>
          <Box
            width={['100%', '48%']}
            mb={7}
            borderRadius={'10px'}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"}
          >
            <Link href='/projects'>
              <a>
                <Image
                  className="blogs-page_box_article-card_img"
                  borderRadius={'10px 10px 0px 0px'}
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Website"
                />
                <Heading
                  as="h2"
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                >
                  👨‍🏭 Shop 2
                </Heading>
                <Box display={'flex'} ml={3} mt={3} mb={5}>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Shopify</Code>
                  <Code mr={2} fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Branding</Code>
                  <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>UX/UI</Code>
                </Box>
              </a>
            </Link>
          </Box>
        </Box>
      </motion.div>
    </Layout>
  );
}