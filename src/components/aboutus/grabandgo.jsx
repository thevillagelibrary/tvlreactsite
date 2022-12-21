import { PageBodySideMenu } from '@/components';
import { HStack, Link, Text, VStack } from '@chakra-ui/react';

export default function GrabAndGo({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <VStack
        fontSize='1rem'
        fontFamily='Calibri'
        width='35.75rem'
        spacing='2'
        ml='0.5rem'
        alignItems='left'>
        <Text width='100%' fontSize='1rem'>
          1. Curbside pickup is available Tuesdays through Saturdays.
        </Text>
        <HStack width='100%'>
          <Text fontSize='1rem'>2. Our catalog is now available online.</Text>
          <Link href='https://thevillagelibrary.library.site'>
            <Text fontSize='1rem' color='#551A8B' textDecoration='underline'>
              Click here to view our catalog
            </Text>
          </Link>
        </HStack>
        <Text fontSize='1rem'>
          3. Call 598-1183 between 10:00 a.m. and 3:00 p.m. to reserve your
          books. Please limit your selections to 3 adult books or 5 children's
          books and do not leave a voicemail message.
        </Text>
        <Text fontSize='1rem'>
          4. Curbside pickup is between 11:00 a.m. and 4:00 p.m. Please stay in
          your car, pop your trunk, and a volunteer will bring your books to
          you.
        </Text>
        <Text fontSize='1rem'>
          5. If your membership needs to be renewed or fines are due, we will
          let you know when you pick your books up and what the options are to
          pay.
          <br />
        </Text>
      </VStack>
    </PageBodySideMenu>
  );
}
