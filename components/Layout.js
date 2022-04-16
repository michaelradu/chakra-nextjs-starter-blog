import Head from "next/head";
import { Stack, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon-logoipsum.svg" />
      </Head>
      <Stack as="main" mx="auto" mt="10px">
        <Navbar />
        <main
          className="main-container"
        >
          <Box
            ml={'auto'}
            mr={'auto'}
            maxWidth={'1000px'}
          >
            {children}
          </Box>
        </main>
        <Footer />
      </Stack>
    </>
  );
}