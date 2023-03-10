import Head from "next/head";
import strings from "../strings/strings.json";

import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dummy content</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Box>
          <Heading as="h1" size="4xl">
            This is a dummy site
          </Heading>
          <Box>
            <Heading as="h2" size="xl">
              {strings.DUMMY_TITLE}
            </Heading>
            <Text>{strings.DUMMY_CONTENT}</Text>
            <Button colorScheme="blue">{strings.DUMMY_CTA}</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
