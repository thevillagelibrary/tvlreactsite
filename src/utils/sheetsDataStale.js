import { get } from '@/utils/localStorage';

export default function sheetsDataStale() {
  if (!localStorage.getItem('timeStamp')) localStorage.setItem('timeStamp', 1);
  let timeNow = Date.now();
  let timeThen = get('timeStamp');
  let minutesSinceFetch = (timeNow - timeThen) / 60000;
  if (minutesSinceFetch > 60) {
    return true;
  } else {
    return false;
  }
}
