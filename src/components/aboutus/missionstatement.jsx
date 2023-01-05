import { Center, Text } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function MissionStatement({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Text fontSize='1rem' fontFamily='Times New Roman'>
        The volunteer-run Village Library offers a welcoming environment for
        people of all ages from Skidaway Island and beyond with a collection
        that entertains and enriches.
      </Text>
    </PageBodySideMenu>
  );
}
