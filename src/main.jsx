import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Layout,
  Home,
  AboutUs,
  ArtForSale,
  BookDonations,
  ChildrensProgram,
  Collection,
  Membership,
  Organization,
  MissionStatement,
  GrabAndGo,
  NewsEvents,
  UpcomingEvents,
  FacilitiesManagerNeeded,
  OutgoingBoardMembers,
  ReadingListsOnTheWeb,
  NewArrivals,
  JustOffRental,
  Books,
  BookCDs,
  YouthSection,
  PhotoAlbum,
  Supporters,
  RecentDonors,
  LandingsLandlovers,
  TheLandingsAssociation,
  TheLandingsClub,
  ContactUs,
} from '@/components';
import { theme } from '@/styles';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home name={'Home'} />} />
      <Route element={<AboutUs name={'AboutUs'} />} path='aboutus' />
      <Route
        element={<Organization name={'Organization'} />}
        path='aboutus/organization'
      />
      <Route
        element={<MissionStatement name={'MissionStatement'} />}
        path='aboutus/missionstatement'
      />
      <Route
        element={<Membership name={'Membership'} />}
        path='aboutus/membership'
      />
      <Route
        element={<Collection name={'Collection'} />}
        path='aboutus/collection'
      />
      <Route
        element={<ChildrensProgram name={'ChildrensProgram'} />}
        path='aboutus/childrensprogram'
      />
      <Route
        element={<ArtForSale name={'ArtForSale'} />}
        path='aboutus/artforsale'
      />
      <Route
        element={<BookDonations name={'BookDonations'} />}
        path='aboutus/bookdonations'
      />
      <Route
        element={<GrabAndGo name={'GrabAndGo'} />}
        path='aboutus/grabandgo'
      />
      <Route element={<NewsEvents name={'NewsEvents'} />} path='newsevents' />
      <Route
        element={<UpcomingEvents name={'UpcomingEvents'} />}
        path='newsevents/upcomingevents'
      />
      <Route
        element={<FacilitiesManagerNeeded name={'FacilitiesManagerNeeded'} />}
        path='newsevents/facilitiesmanagerneeded'
      />
      <Route
        element={<OutgoingBoardMembers name={'OutgoingBoardMembers'} />}
        path='newsevents/outgoingboardmembers'
      />
      <Route
        element={<ReadingListsOnTheWeb name={'ReadingListsOnTheWeb'} />}
        path='newsevents/readinglistsontheweb'
      />
      <Route
        element={<NewArrivals name={'NewArrivals'} />}
        path='newarrivals'
      />
      <Route
        element={<JustOffRental name={'JustOffRental'} />}
        path='newarrivals/justoffrental'
      />
      <Route element={<Books name={'Books'} />} path='newarrivals/books' />
      <Route
        element={<BookCDs name={'BookCDs'} />}
        path='newarrivals/bookcds'
      />
      <Route
        element={<YouthSection name={'YouthSection'} />}
        path='newarrivals/youthsection'
      />
      <Route element={<PhotoAlbum name={'PhotoAlbum'} />} path='photoalbum' />
      <Route element={<Supporters name={'Supporters'} />} path='supporters' />
      <Route
        element={<RecentDonors name={'RecentDonors'} />}
        path='supporters/recentdonors'
      />
      <Route
        element={<LandingsLandlovers name={'LandingsLandlovers'} />}
        path='supporters/landingslandlovers'
      />
      <Route
        element={<TheLandingsAssociation name={'TheLandingsAssociation'} />}
        path='supporters/thelandingsassociation'
      />
      <Route
        element={<TheLandingsClub name={'TheLandingsClub'} />}
        path='supporters/thelandingsclub'
      />
      <Route element={<ContactUs name={'ContactUs'} />} path='contactus' />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
