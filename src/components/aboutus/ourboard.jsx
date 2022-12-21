import {
  //Box,
  Center,
  Heading,
  //Image,
  Table,
  Tbody,
  Tr,
  Td,
  //Text,
} from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';
//import _Board2021 from '../../pictures/2021 Board.jpg';

export default function OurBoard({ name }) {
  return (
    <PageBodySideMenu name={name}>
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
          width='35.75rem'
          size='lg'
          fontSize='1.25rem'
          fontFamily='Calibri'
          padding='0'>
          <Tbody>
            <Tr>
              <Td borderBottom='none' padding='0'>
                President
              </Td>
              <Td borderBottom='none' padding='0'>
                Sandy Cooper
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                712-3906
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                VP Community Relations
              </Td>
              <Td borderBottom='none' padding='0'>
                Brenda Day
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                598-9744
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                VP Operations
              </Td>
              <Td borderBottom='none' padding='0'>
                Ren&eacute;e Collins
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                229-291-6596
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Secretary
              </Td>
              <Td borderBottom='none' padding='0'>
                Jane Gilchrist
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                598-2295
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Treasurer
              </Td>
              <Td borderBottom='none' padding='0'>
                Joy Howard
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                598-5412
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Volunteer Coordinator
              </Td>
              <Td borderBottom='none' padding='0'>
                Louise McDonald
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                616-250-2123
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Public Information Officer
              </Td>
              <Td borderBottom='none' padding='0'>
                Nicole Tifverman
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                404-849-6457
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Training Manager
              </Td>
              <Td borderBottom='none' padding='0'>
                (vacant)
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                598-9266
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Youth Section Manager
              </Td>
              <Td borderBottom='none' padding='0'>
                Kathy Kahn
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">
                598-8861
              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Collection Department
              </Td>
              <Td borderBottom='none' padding='0'>
                CeCe Coleman
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">

              </Td> */}
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0'>
                Finance
              </Td>
              <Td borderBottom='none' padding='0'>
                Terry Kessler
              </Td>
              {/*
              <Td borderBottom="none" textAlign="right" padding="0">

              </Td> */}
            </Tr>
          </Tbody>
        </Table>
      </Center>
      {/* <br />
      <Image
        htmlWidth="550"
        objectFit="cover"
        src={_Board2021}
        alt="2021 Board"
      />
      <Box width="25rem">
        <Text
          fontSize=".75rem"
          fontFamily="Times New Roman"
          fontWeight="bold"
          textAlign="center"
        >
          The Village Library Board
        </Text>
        <Text fontSize=".75rem" fontFamily="Times New Roman">
          Missing: Renée Collins
          <br />
          Back: Carol Holland, Kathy Berlin, Louise McDonald, Sandy Cooper,
          Brenda Day, Nicole Tifverman
          <br />
          Front: Liz McAdams, Jane Hoover, Kathy Kahn
        </Text>
      </Box>*/}
    </PageBodySideMenu>
  );
}
