import { PageBodySideMenu } from '@/components';
import { Center, Table, Tbody, Tr, Td, Text, VStack } from '@chakra-ui/react';

export default function BookDonations({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <VStack
        fontSize='1rem'
        fontFamily='Calibri'
        width='35.75rem'
        spacing='2'
        ml='0.5rem'
        alignItems='left'>
        <Text fontSize='1rem'>
          Small Donations (individual or one small bag or box): Tues. - Sat., 10
          a.m. to 5 p.m.
          <br />
          Large Donations: Sat., 10 a.m. to 12 noon
          <br />
          Estate Donations: By appointment (call the Library)
        </Text>
        <Text fontSize='1rem'>
          The Village Library accepts donations of current hardback and
          paperback books, children’s books, Audio book CDs, and DVDs. Virtually
          all items that you donate to the library will be sold, generating
          much-needed revenue for your library. Therefore, all donated items
          must be in very good condition, not damaged or outdated.
          Unfortunately, there are items we cannot accept such as magazines,
          reference and textbooks, travel guides and cassette tapes. Please see
          the list below for more specific information regarding all donated
          items.
        </Text>
        <Text fontSize='1rem'>
          <u>
            <b>Please note</b>
          </u>
          <b>:</b>&nbsp;Library staff will be working during the donation hours
          to help with the process. Due to storage restrictions, initially we
          will be able to accept up to 50 of your items per donation visit. We
          are requesting that patrons allow library staff to review items being
          donated before they are left at the library. All donors will be given
          a receipt confirming their donation.
        </Text>
        <Text fontSize='1rem'>
          The Village Library is most interested in the following types of
          materials for inclusion in its Book Sale inventory. Our books are
          available for sale during regular hours of operation, Monthly Bag of
          Book Sales, and our annual Fall and Spring Book Sales:
        </Text>
        <Table size='' variant='simple' padding='0'>
          <Tbody>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Hardbound current fiction and non-fiction books with jackets
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Biographies and autobiographies
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Children's books
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Trade Paperback books fiction and non-fiction
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Mass Market paperbacks
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Books of local interest
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Cookbooks
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Art Books/Coffee Table Books
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Media material: Audio book CDs, DVD’s
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Text fontSize='1rem'>
          The following are books and periodicals that we cannot use or even
          accept as they present a disposal problem:
        </Text>
        <Table size='' variant='simple' padding='0'>
          <Tbody>
            <Tr>
              <Td borderBottom='none' padding='0'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Damaged books, which may include:
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' width='100%' px='5rem' py='0'>
                Missing book jackets, covers or pages, loose bindings, ripped or
                missing pages, disintegrating pages and covers caused by
                exposure to heat and sun, water-damaged or moldy books
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Textbooks and Reference books which include:
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' width='100%' px='5rem' py='0'>
                Encyclopedias, Dictionaries, Bibliographies, Almanacs,
                Directories,Atlases, Handbooks
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Informational Books:
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' width='100%' px='5rem' py='0'>
                Technological, Tax, Investment, Medical, Educational, Legal
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Condensed or Abridged materials
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Magazines of any sort
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Travel and Restaurant Guides
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Cassette Tapes and VHS tapes
              </Td>
            </Tr>
            <Tr>
              <Td borderBottom='none' padding='0' width='5rem'></Td>
              <Td borderBottom='none' padding='0' px='0' py='0'>
                Ex-library books
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Text fontSize='1rem'>
          The Village Library acknowledges the great importance of your
          donation.
        </Text>
        <Center>
          <Text fontSize='1.2rem' fontFamily='Lucida Calligraphy'>
            Thank you.
          </Text>
        </Center>
      </VStack>
      {/* <iframe
        src="http://thevillagelibrary.org/about/Library_Donations.htm"
        title="Book Donations"
        width="545"
        height="900"
      ></iframe> */}
    </PageBodySideMenu>
  );
}
