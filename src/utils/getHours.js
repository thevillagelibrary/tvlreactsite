import { get } from '@/utils/localStorage';

export default function getHours() {
  const sheets = get('sheets');
  const hours = sheets[6];
  hours.splice(0, 2);
  return hours;
}
