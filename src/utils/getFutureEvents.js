import { get } from '@/utils/localStorage';

export default function getFutureEvents() {
  const sheets = get('sheets');
  const events = sheets[5];
  events.splice(0, 2);
  const eventCount = events.length;

  let futureEvents = [];
  if (eventCount > 0) {
    futureEvents = events.filter(checkEvent);
  }
  function checkEvent(event) {
    const today = Date.now();
    const todayDate = new Date(today);
    const todayObj = dateObj(todayDate);
    const eventString = Date.parse(event[1]);
    const eventDate = new Date(eventString);
    const eventObj = dateObj(eventDate);
    return eventObj.getTime() >= todayObj.getTime();
  }

  function dateObj(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }
  return futureEvents;
}
