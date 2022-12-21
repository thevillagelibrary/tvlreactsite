import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function Membership({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Box>
        <Text fontSize='1rem'>
          Membership in The Village Library is open to anyone. It will cost only
          $10 for a family to join. After that, the annual dues are only $10 per
          year per family. This fee will give you full privileges to borrow any
          of our 24,000 books for 3 weeks without charge. You don't need to be a
          member to purchase any of our thousands of used books.
          <br></br>
          <br></br>
          We have a special rate for our latest bestselling books, DVDs and
          Audio Books. We put the latest books and best sellers on "RENTAL".
          These books are in a special area and will cost $.30 per day. DVDs and
          Audio books, which can be found in the new Ann Resch Litten Memorial
          Wing, will cost $.40 per day. These special charges are imposed to
          encourage people to return these high demand items sooner so that more
          patrons can have access to them. All "Great Courses" CDs and DVDs can
          be checked out the sane as books, free for three weeks.<br></br>
          <br></br>
          We have no paid employees. The library is managed and staffed by
          volunteers. Volunteers are always needed at the Village Library. If
          you have an interest in helping others, we encourage you to apply to
          become a library volunteer. Some of our volunteers have been active
          for more than 20 years. To be a volunteer, you don’t need library
          skills, but you will need to be able to enter data into a computer.
          Almost anyone who can create email can learn our system.
        </Text>
      </Box>
    </PageBodySideMenu>
  );
}
