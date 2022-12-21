import { Banner } from '@/components';

import { VStack } from '@chakra-ui/react';

export function PageBodyNoSideMenu(props) {
  return (
    <VStack w='45rem' spacing='2'>
      <Banner name={props.name} />
      {props.children}
    </VStack>
  );
}

export function PageBodySideMenu(props) {
  return (
    <VStack w='35.75rem' spacing='2' ml='0.5rem'>
      <Banner name={props.name} width='part' />
      {props.children}
    </VStack>
  );
}
