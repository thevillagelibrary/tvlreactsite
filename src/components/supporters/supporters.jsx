import { Heading, Box } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function Supporters({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Box>
        <Heading
          margin='0 0 0 8px'
          padding='0'
          fontSize='1.4rem'
          color='#42210A'
          fontWeight='bold'
          fontStyle='italic'
          textAlign='left'
          fontFamily='Times New Roman'>
          We wish to thank all the organizations, businesses, and dedicated
          volunteers who have made our library possible.
          <br />
          <br />
          A special thanks goes to David L. Litten, who was a major donor to the
          new wing in memory of his late wife, Ann Resch Litten, and who
          continues to suport the library generously in her memory.
          <br />
          <br />
          A special thanks also goes to Landings Landlovers, which has been a
          regular and generous supporter of the library for many years.
          <br /> <br />
          If you would like to learn more about some of these contributors,
          links to their websites may be found on this page.
        </Heading>
      </Box>
    </PageBodySideMenu>
  );
}
