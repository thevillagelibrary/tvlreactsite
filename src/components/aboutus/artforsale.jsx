import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function ArtForSale({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Center>
        <Text fontSize='1.4rem' fontWeight='bold' fontStyle='italic'>
          LOVE ART? LOVE THE VILLAGE LIBRARY?
        </Text>
      </Center>
      <Box>
        <Text fontSize='1rem'>
          The next time you come to The Village Library, please take a moment or
          two to view the many wonderful pieces of art that hang in the Ann
          Resch Litten Corridor which leads from the main library into the new
          addition to the library.<br></br>
          <br></br>
          Many local artists have graciously donated these paintings to The
          Village Library. These artworks are for sale at prices far below their
          intrinsic value. They would be wonderful gifts for a birthday or
          anniversary, or even a wall in your own home.<br></br>
          <br></br>
          All monies from the sale of these pieces will help The Village Library
          continue its mission to provide you a conveniently located source for
          your reading and listening pleasure.
        </Text>
      </Box>
    </PageBodySideMenu>
  );
}
