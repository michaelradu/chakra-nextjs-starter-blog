import React from "react";
import Layout from "../components/Layout";
import { Button, Code, Image, Grid, Heading, Box, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

export default function Home({ posts }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Layout
      title="My Homepage"
      description="Markdown Blog & projects Starter"
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Grid autoColumns={'1fr'} alignItems='center' gap={'3em'} autoFlow={['row','column']}>
          <div className="container-home">
            <div className="container-title">
              <h2 className="title1-home">👋 Hey I'm anon!</h2>
              <h1 className="title-home">I'm a software developer and open-source lover.</h1>
              <p className="subtitle-home">This website is my 📚 digital library of the things I have learned and created over the years, and anything else I want to write about. You can read my
                {' '}
                <Link href='/blog'>
                  <Code
                    fontWeight={'600'}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={'.2em .4em'}
                    borderRadius={'5px'}
                    cursor="pointer"
                  >
                    blog
                  </Code>
                </Link>, view my {' '}
                <Link href='/projects'>
                  <Code
                    fontWeight={'600'}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={'.2em .4em'}
                    borderRadius={'5px'}
                    cursor="pointer"
                  >
                    projects
                  </Code>
                </Link>, or learn more{' '}
                <Link href='/about'>
                  <Code
                    fontWeight={'600'}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={'.2em .4em'}
                    borderRadius={'5px'}
                    cursor="pointer"
                  >
                    about me
                  </Code>
                </Link>.</p>
            </div>
            <div className="tag-container">
              <Link href='/projects'><a>
                <Button
                  variant={"solid"}
                  colorScheme='teal'
                  bg={"#17cf97"}
                  color={colorMode === "dark" ? "#091721" : "#e2e8f0"}
                  size={"sm"}
                  mr={4}
                  rightIcon={<ArrowForwardIcon />}
                >
                  My Projects
                </Button>
              </a></Link>
              <Link href='/blog'><a>
                <Button
                  variant={"outline"}
                  borderColor={"#17cf97"}
                  color={"#17cf97"}
                  size={"sm"}
                  mr={4}
                  rightIcon={<ArrowForwardIcon />}
                >
                  My Blog
                </Button>
              </a></Link>
            </div>
          </div>
          <Image
            width={"510px"}
            height={"510px"}
            src="//unsplash.it/510"
            alt="Avatar"
          />
        </Grid>
        <Services />

        <Heading
          as="h1"
          fontSize={["30px", "40px"]}
          fontWeight={"bold"}
          mt={12}
          textAlign={"center"}
        >
          Featured articles
        </Heading>

        <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
          mt={'30px'}
          mb={'20px'}
        >
          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
              📰
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>Here is a sample of articles which I feel give you a good idea of what this site is all about.
            </Text>
          </Box>
        </Box>
        <Box className="blog-page">
          {posts.map((post) => (
            <React.Fragment key={post.slug}>

              <Box
                className="blogs-page_box_article-card"
                borderRadius={'10px'}
                bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
                boxShadow={colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"
                }
              >
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <Image
                      className="blogs-page_box_article-card_img"
                      borderRadius={'10px 10px 0px 0px'}
                      src={post.img}
                      alt={post.title}
                    />
                  </a>
                </Link>

                <Box className="blogs-page_box_article-card_title">
                  <Box display={'flex'}>
                    <Box
                      mr={'8px'}
                      color={colorMode === 'dark' ? '#4e77f9' : '#757575'}
                      fontSize={'13px'}
                    >
                      <p className="blogs-page_box_article-card_title_fecha font-for-date">{post.date} • </p>
                    </Box>
                    <Box className=''
                      display={'flex'}
                      color={colorMode === 'dark' ? 'white' : '#091721'}
                      bg={colorMode === 'dark' ? '#4e77f9' : '#c9d1ec'}
                      borderRadius="5px"
                      px={3}
                      fontSize={'12px'}
                      width={'fit-content'}
                      alignItems={'center'}
                    >
                      {post.tag}
                    </Box>
                  </Box>
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <h2 className="blogs-page_box_article-card_title_h2">
                        {post.title}
                      </h2>
                    </a>
                  </Link>

                  <p className="blogs-page_box_article-card_title_parrafo">
                    {post.subtitle}
                  </p>

                </Box>
              </Box>
            </React.Fragment>

          )).slice(0, 2)}
        </Box>
        <Heading
          as="h1"
          fontSize={["30px", "40px"]}
          fontWeight={"bold"}
          mt={12}
          textAlign={"center"}
          mb={'40px'}
        >
          Latest Projects
        </Heading>

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
        </Box>
      </motion.div >
    </Layout >
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
