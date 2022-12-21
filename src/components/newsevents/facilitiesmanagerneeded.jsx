import { Text } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function FacilitiesManagerNeeded({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Text fontSize='1.2rem'>
        The Village Library needs a volunteer facilities manager to job share
        with a co-facilities manager, each responsible for the library building
        for six months per year. The position to be filled will serve from
        October 2022 through March 2023.
        <br />
        <br />
        The Facilities Managers are responsible for the maintenance and repair
        of all library real property. They secure bids for contracted work and
        oversee its completion, including the cleaning service, trash removal,
        landscape service, HVAC, fire extinguishers, fire detection system,
        carpet cleaning, exterior power washing, plumbing, and electrical
        services. They also are responsible for setting the HVAC temperature,
        assigning keys, arranging for repairs, and purchasing supplies.
        Additionally, they review the utilities, alarm service, and insurance
        bills with the Library Treasurer and provide input for the annual
        budget.
        <br />
        <br />
        If you are interested in helping to care for The Village Library
        facilities, please contact Library President Sandy Cooper at
        scooper105@earthlink.net.
      </Text>
    </PageBodySideMenu>
  );
}
