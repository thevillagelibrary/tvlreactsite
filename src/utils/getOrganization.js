import { get } from '@/utils/localStorage';

export default function getOrganization() {
  const sheets = get('sheets');
  const organization = sheets[7];
  organization.splice(0, 2);
  return organization;
}
