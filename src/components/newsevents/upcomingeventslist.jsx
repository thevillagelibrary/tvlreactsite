import { Box, Divider, Image, Text } from '@chakra-ui/react';
import { getFutureEvents } from '@/utils';
import { v4 as uuidv4 } from 'uuid';

export default function UpcomingEventsList() {
  const futureEvents = getFutureEvents();
  const futureEventCount = futureEvents.length;

  const eventsToDisplay = futureEvents.map((event) => {
    if (event[6]) {
      let imgSource = 'https://drive.google.com/uc?export=view&id=' + event[6];
      return (
        <>
          <Text
            color='#F29085'
            width='100%'
            key={uuidv4()}
            fontSize='1.2rem'
            whiteSpace='pre-wrap'>
            <strong>{event[3]}</strong>
          </Text>
          <Image alt={event[3]} height='29rem' src={imgSource} width='22rem' />
          <Text
            width='100%'
            key={uuidv4()}
            fontSize='1rem'
            whiteSpace='pre-wrap'>
            <strong>{event[5]}:</strong> {event[2]} -- {event[4]}
          </Text>
          <Divider variant='custom' />
        </>
      );
    } else {
      return (
        <>
          <Text
            color='#F29085'
            width='100%'
            key={uuidv4()}
            fontSize='1.2rem'
            whiteSpace='pre-wrap'>
            <strong>{event[3]}</strong>
          </Text>
          <Text
            width='100%'
            key={uuidv4()}
            fontSize='1rem'
            whiteSpace='pre-wrap'>
            <strong>{event[5]}:</strong> {event[2]} -- {event[4]}
          </Text>
          <Divider variant='custom' />
        </>
      );
    }
  });

  const EventDisplay = () => <>{eventsToDisplay}</>;

  return (
    <>
      {futureEventCount > 0 ? (
        <EventDisplay key={uuidv4()} />
      ) : (
        <Text width='100%' key={uuidv4()}>
          There are no upcoming events.
        </Text>
      )}
    </>
  );
}
