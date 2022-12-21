import bookA from '@/images/book-A.gif';
import { Center, Image, Text } from '@chakra-ui/react';
import { PageBodyNoSideMenu } from '@/components';

export default function ContactUs({ name }) {
  return (
    <PageBodyNoSideMenu name={name}>
      <Text align='center' fontSize='1.5rem' fontFamily='Times New Roman'>
        The Village Library, Inc.
        <br />
        1 Skidaway Village Square
        <br />
        Savannah, GA 31411
        <br /> 912-598-1183
      </Text>
      <br />
      <br />
      <Center>
        <Image
          ml='2rem'
          htmlWidth='171'
          htmlHeight='220'
          objectFit='cover'
          src={bookA}
          alt='Book'
        />
      </Center>
    </PageBodyNoSideMenu>
  );
}
