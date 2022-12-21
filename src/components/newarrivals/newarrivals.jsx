import { Text } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';
export default function NewArrivals({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Text
        fontSize='1rem'
        fontFamily='Times New Roman'
        color='#341A08'
        fontWeight='bold'>
        On the left you will find the latest additions to our collection.
      </Text>
    </PageBodySideMenu>
  );
}
