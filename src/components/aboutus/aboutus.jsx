import { Center, Text } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function AboutUs({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Text fontSize='1rem' fontFamily='Times New Roman'>
        In 1990 a small but visionary group of people on Skidaway Island
        conceived the idea of a community library. It started out small with
        books donated by residents in a store front located in the commercial
        section of the island. Through the generosity of many people a building
        was constructed in 1996. Today we have more than 24,000 books. In the
        last two years, we have served over 2,400 members.
        <br />
        <br />
        Unlike tax supported public libraries, we receive no funds from Federal,
        State or local governments. Our funding comes from membership fees,
        donations, book rentals, the sale of used books and engraved bricks.
        Because we are a Section 501 (c) (3) organization, all donations are
        tax-deductible.
      </Text>
      <Center fontSize='1rem' fontFamily='Times New Roman'>
        1 Skidaway Village Square
        <br />
        Savannah, GA 31411
        <br />
        912-598-1183
      </Center>
      <Text fontSize='1rem' fontFamily='Times New Roman'>
        The Library is open Tuesday through Saturday from 10:00 AM to 5:00 PM.
        <br />
        We are closed on Sunday and Monday, and on the following holidays:
        Memorial Day, Fourth of July, Labor Day, Thanksgiving (and the afternoon
        before), December 24-26, and New Years Eve and Day.
      </Text>
    </PageBodySideMenu>
  );
}
