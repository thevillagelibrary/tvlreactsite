import { useState } from 'react';
import { PageBodySideMenu } from '@/components';
import UpcomingEventsList from '@/components/NewsEvents/UpcomingEventsList';
import fetchGoogleSheets from '@/utils/fetchGoogleSheets';
import sheetsDataStale from '@/utils/sheetsDataStale';
import { Spinner } from '@/components';

export default function UpcomingEvents({ name }) {
  const [loading, setLoading] = useState(true);
  if (sheetsDataStale()) {
    fetchGoogleSheets(setLoading);
    if (loading) {
      return <Spinner />;
    }
  }
  return (
    <PageBodySideMenu name={name}>
      <UpcomingEventsList />
      <br />
      <br />
    </PageBodySideMenu>
  );
}
