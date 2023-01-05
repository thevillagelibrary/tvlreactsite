import { useState } from 'react';
import { Box, Heading, Table, Tbody, Tr, Td, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { PageBodySideMenu } from '@/components';
import { get } from '@/utils/localStorage';
import fetchGoogleSheets from '@/utils/fetchGoogleSheets';
import sheetsDataStale from '@/utils/sheetsDataStale';
import { Spinner } from '@/components';

export default function GoogleSheetsData({ name }) {
  const [loading, setLoading] = useState(true);
  if (sheetsDataStale()) {
    fetchGoogleSheets(setLoading);
    if (loading) {
      return <Spinner />;
    }
  }
  const narrow = '40%';
  const wide = '55%';
  const sheet = {
    JustOffRental: {
      sheetNo: 0,
      leftCellWidth: narrow,
    },
    Books: {
      sheetNo: 1,
      leftCellWidth: narrow,
    },
    BookCDs: {
      sheetNo: 2,
      leftCellWidth: narrow,
    },
    YouthSection: {
      sheetNo: 3,
      leftCellWidth: narrow,
    },
    RecentDonors: {
      sheetNo: 4,
      leftCellWidth: wide,
    },
    Upcoming_Events: {
      sheetNo: 5,
      leftCellWidth: narrow,
    },
  };
  const sheets = get('sheets');
  const updated = sheets[sheet[name].sheetNo][0][3];
  const combinedAuthorTitle = sheets[sheet[name].sheetNo][0][2] === 'Not Used';
  const categories = get('categories');
  function buildCategoryList(category) {
    return category;
  }
  const categoryList = categories[sheet[name].sheetNo].map(buildCategoryList);
  //build the rows and tables
  //first, build the rows
  //start by building the materials array for each category

  function buildMaterials(category, index) {
    const row = category.row;
    const entries = category.entries;
    const lastEntry = row + entries;
    function createMaterial(entry, index) {
      return index > row && index < lastEntry + 1;
    }
    const material = sheets[sheet[name].sheetNo].filter(createMaterial);
    return material;
  }
  const materials = categoryList.map(buildMaterials);

  function buildRows(material) {
    if (combinedAuthorTitle) {
      function createRow1(material) {
        return (
          <Tr key={uuidv4()}>
            <Td borderBottom='none' key={uuidv4()} px='0' py='0'>
              {material[1]}
            </Td>
          </Tr>
        );
      }
      const row = material.map(createRow1);
      return row;
    } else {
      function createRow2(material, index) {
        return (
          <Tr verticalAlign='top' key={uuidv4()}>
            <Td
              borderBottom='none'
              key={uuidv4()}
              width={sheet[name].leftCellWidth}
              px='0'
              py='0'>
              {material[1]}
            </Td>
            <Td
              borderBottom='none'
              key={uuidv4()}
              style={{ fontStyle: 'italic' }}
              px='0'
              py='0'>
              {material[2]}
            </Td>
          </Tr>
        );
      }
      const row = material.map(createRow2);
      return row;
    }
  }
  const rows = materials.map(buildRows);

  //then, build the tables
  function buildTable(table, index) {
    return (
      <>
        {categoryList.length > 1 || name === 'YouthSection' ? (
          <Box width='35.75rem' textAlign='left'>
            <Text fontSize='1rem' fontWeight='bold'>
              {table.category}
            </Text>
          </Box>
        ) : null}
        <Table fontSize='1rem' key={uuidv4()} size='' textAlign='left'>
          <Tbody>{rows[index]}</Tbody>
        </Table>
        <br />
      </>
    );
  }
  const tables = categoryList.map(buildTable);

  return (
    <PageBodySideMenu name={name}>
      <Box width='35.75rem' textAlign='right'>
        <Text fontSize='1rem' style={{ fontStyle: 'italic' }}>
          {updated}
        </Text>
      </Box>

      {sheet[name].sheetNo === 1 && (
        <Box width='35.75rem' textAlign='left'>
          <Text fontSize='1rem' fontWeight='bold'>
            Rental or New at the Library
          </Text>
          <br />
        </Box>
      )}
      {sheet[name].sheetNo === 4 && (
        <>
          <Heading
            margin='.0625rem 0 .0625rem 0'
            padding='0'
            fontSize='1.2rem'
            fontFamily='Times New Roman'
            color='#800000'
            fontWeight='bold'
            fontStyle='italic'>
            We wish to thank those who have donated to the Library recently.
          </Heading>
        </>
      )}
      {tables}
      {sheet[name].sheetNo === 1 && (
        <Box width='35.75rem' textAlign='left'>
          <Text fontSize='1rem'>KAREN MARTORELLI</Text>
          <Text fontSize='1rem'>Acquisitions Chair</Text>
        </Box>
      )}
    </PageBodySideMenu>
  );
}
