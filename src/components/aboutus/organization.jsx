import {
  Box,
  Center,
  Heading,
  Image,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
} from '@chakra-ui/react';
import _Board2022 from '../../pictures/2022 Board.jpg';
import { PageBodySideMenu } from '@/components';
import getOrganization from '@/utils/getOrganization';

export default function Organization({ name }) {
  let organization = getOrganization();
  console.log(
    '🚀 ~ file: organization.jsx:18 ~ Organization ~ organization',
    organization
  );

  return (
    <PageBodySideMenu name={name}>
      <Text fontSize='1rem'>
        The Village Library, Inc. is a Georgia non-profit [§501 (c) (3)]
        corporation and is managed by a slate of officers elected by a board of
        directors. The directors are chosen by the members at an annual meeting
        in May of each year.
      </Text>
      <Heading
        fontFamily='Times New Roman'
        margin='.5rem 0 .0625rem 0'
        padding='0'
        fontSize='1.4rem'
        color='#42210A'
        fontWeight='bold'
        fontStyle='italic'
        textAlign='center'>
        Officers & Directors
      </Heading>
      <Center>
        <Table
          variant='simple'
          width='25rem'
          size='lg'
          fontSize='1.25rem'
          fontFamily='Calibri'
          padding='0rem'>
          <Tbody>
            {organization.map((item, index) => (
              <Tr key={index}>
                <Td borderBottom='none' padding='0rem'>
                  {item[1]}
                </Td>
                <Td borderBottom='none' padding='0rem'>
                  {item[2]}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Center>
      <br />
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={_Board2022}
        alt='2022 Board'
      />
      <Box width='25rem'>
        <Text
          fontSize='.75rem'
          fontFamily='Times New Roman'
          fontWeight='bold'
          textAlign='center'>
          The Village Library Board
        </Text>
        <Text fontSize='.75rem' fontFamily='Times New Roman'>
          Missing: Kathy Kahn, Louise McDonald
          <br />
          Back: Renée Collins, Liz McAdams, CeCe Coleman, Jane Gilchrist, Terry
          Kessler
          <br />
          Front: Sandy Cooper, Brenda Day, Carol Holland, Nicole Tifverman
        </Text>
      </Box>
      <Text fontSize='1rem'>
        The library is run by about ninety volunteers who each donate from 25 to
        more than 100 hours of their time each year. Some of them have served
        for 20 years. These are the people who keep the library running smoothly
        by checking books in and out, wrapping new books in plastic jackets,
        attaching bar codes and entering them into our system. Without their
        generosity the library would not exist.
      </Text>
    </PageBodySideMenu>
  );
}
