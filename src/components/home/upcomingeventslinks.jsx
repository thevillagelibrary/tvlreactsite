import { Link as ReactLink } from 'react-router-dom';
import { Divider, Heading, Link, Text } from '@chakra-ui/react';
import getFutureEvents from '@/utils/getFutureEvents';
import { v4 as uuidv4 } from 'uuid';

export default function UpcomingEventsLinks() {
  const futureEvents = getFutureEvents();
  const futureEventCount = futureEvents.length;

  const linksToDisplay = futureEvents.map((event) => (
    <>
      <Heading
        key={uuidv4()}
        fontSize='1.2rem'
        fontFamily='Times New Roman'
        color='#f29085'>
        {event[3]}
      </Heading>
      <Link key={uuidv4()} as={ReactLink} to='/newsevents/upcomingevents'>
        <Text
          key={uuidv4()}
          fontSize='1.0rem'
          color='#7283fe'
          textDecoration='underline'>
          {event[5]}, {event[2]}
        </Text>
      </Link>
    </>
  ));

  const EventDisplay = () => (
    <>
      <Heading key={uuidv4()} fontSize='1.4rem' fontFamily='Times New Roman'>
        Upcoming Events
      </Heading>
      <Text key={uuidv4()} fontSize='1.0rem' fontFamily='Times New Roman'>
        (click a link below for details)
      </Text>
      {linksToDisplay}
      <Divider variant='custom' />
    </>
  );
  if (futureEventCount > 0) {
    return <>{futureEventCount && <EventDisplay />}</>;
  } else {
    return null;
  }
}
