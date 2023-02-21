import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Link,
  Image,
  VStack,
  Text,
} from '@chakra-ui/react';
import { PageBodyNoSideMenu } from '@/components';
import NewWing from '@/images/NewWing.jpg';
import BackOfLibrary from '@/images/BackOfLibrary.jpg';
import BookA from '@/images/book-A.gif';
import FindUsOnFacebook from '@/images/FindUs-FB-RGB-BRC-Site-500.png';
import InstagramIcon from '@/images/Instagram.png';
import UpcomingEventsLinks from '@/components/Home/UpcomingEventsLinks';
import fetchGoogleSheets from '@/utils/fetchGoogleSheets';
import getHours from '@/utils/getHours';
import sheetsDataStale from '@/utils/sheetsDataStale';
import { Spinner } from '@/components';

export default function Home({ name }) {
  const [loading, setLoading] = useState(true);
  if (sheetsDataStale()) {
    fetchGoogleSheets(setLoading);
    if (loading) {
      return <Spinner />;
    }
  }
  const hours = getHours();
  return (
    <PageBodyNoSideMenu name={name}>
      <VStack w='45rem'>
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          Library Hours
        </Heading>
        <Text width='100%' fontSize='1rem' whiteSpace='pre-wrap'>
          {hours}
        </Text>
      </VStack>
      <VStack spacing='2'>
        <Divider variant='custom' />
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          Online Catalog
        </Heading>
        <Link href='https://thevillagelibrary.library.site'>
          <Text fontSize='1rem' color='#7283fe' textDecoration='underline'>
            Click here to view our online catalog
          </Text>
        </Link>
        <Divider variant='custom' />
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          Volunteer Help Needed
        </Heading>
        <Link as={ReactLink} to='/newsevents/facilitiesmanagerneeded'>
          <Text fontSize='1rem' color='#7283fe' textDecoration='underline'>
            Facilities Manager (click here for job description)
          </Text>
        </Link>
        <Divider variant='custom' />
        <UpcomingEventsLinks />
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          Book Donations
        </Heading>
        <Link as={ReactLink} to='/aboutus/bookdonations'>
          <Text fontSize='1rem' color='#7283fe' textDecoration='underline'>
            Small Donations (individual or one small bag or box): Wed. - Sat.,
            10 a.m. to 5 p.m.
          </Text>
        </Link>
        <Link as={ReactLink} to='/aboutus/bookdonations'>
          <Text fontSize='1rem' color='#7283fe' textDecoration='underline'>
            Large Donations: Sat., 10 a.m. to 12 noon
          </Text>
        </Link>
        <Link as={ReactLink} to='/aboutus/bookdonations'>
          <Text fontSize='1rem' color='#7283fe' textDecoration='underline'>
            Estate Donations: By appointment (call the Library)
          </Text>
        </Link>
        <Divider variant='custom' />
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          Thanks to Our Recent Donors
        </Heading>
        <Link as={ReactLink} to='/supporters/recentdonors'>
          <Text fontSize='1rem' color='#7283fe' textDecoration='underline'>
            Click here for a list of our recent donors.
          </Text>
        </Link>
        <Divider variant='custom' />
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          Grab-&-Go
        </Heading>
        <Link as={ReactLink} to='/aboutus/grabandgo'>
          <Text fontSize='1rem' color='#7283fe' textDecoration='underline'>
            Curbside pickup is still available. Click here for details.
          </Text>
        </Link>
        <Divider variant='custom' />
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          How You Can Support the Library
        </Heading>
        <Heading fontSize='1.2rem' fontFamily='Times New Roman' color='#f29085'>
          Make a Tax-deductible Donation
        </Heading>
        <Text fontSize='1rem'>
          Click below to donate through PayPal, even if you do not have a PayPal
          account: <br />
        </Text>
        <Box>
          <form
            action='https://www.paypal.com/cgi-bin/webscr'
            method='post'
            target='_top'>
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input
              type='hidden'
              name='hosted_button_id'
              value='ECABE5X7996XU'
            />
            <input
              type='image'
              src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
              border='0'
              name='submit'
              alt='PayPal - The safer, easier way to pay online!'
            />
            <Image
              alt=''
              border='0'
              src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
              width='1'
              height='1'></Image>
          </form>
        </Box>
        <Text fontSize='1rem'>
          Or, write a check to "The Village Library" and deposit it in the book
          drop at the library or mail it to:
          <br />
        </Text>
        <Center fontSize='1rem'>
          The Village Library
          <br />
          Savannah, GA 31411
          <br />
        </Center>
        <Heading fontSize='1.2rem' fontFamily='Times New Roman' color='#f29085'>
          Amazon's Smile Program
        </Heading>
        <Text fontSize='1rem'>
          The AmazonSmile program ended on February 20, 2023. Thank you for your
          support over the last ten years.
        </Text>
        <Heading fontSize='1.2rem' fontFamily='Times New Roman' color='#f29085'>
          Buy A Brick Program
        </Heading>
        <Text fontSize='1rem'>
          The Buy A Brick Program is a means of raising funds to support the
          library. The bricks border the entry to the library. In addition to
          supporting the library by having bricks engraved with their own names,
          our donors have had bricks engraved with the names of their
          grandchildren, to commemorate the passing of a loved one, or to honor
          a friend.
          <br />
          <br />
          Brick donations are $200 each. All contributions are tax-deductible as
          the library is a not-for-profit organization. Brick donor forms are
          available at the library front desk. Checks should be made payable to
          The Village Library.
          <br />
        </Text>
        <Divider variant='custom' />
        <Link
          target='_blank'
          title='The Village Library on Facebook'
          href='http://www.facebook.com/SIvillagelibrary/'>
          <Image
            alt='Find Us on Facebook'
            height='10'
            width='50'
            src={FindUsOnFacebook}
          />
        </Link>
        <Link
          target='_blank'
          title='The Village Library on Instagram'
          href='http://www.instagram.com/si_village_library'>
          <HStack>
            <Text fontSize='2rem' color='red.500'>
              Follow us on Instagram
            </Text>
            <Image
              alt='Follow us on Instagram'
              height='10'
              width='50'
              src={InstagramIcon}
            />
          </HStack>
        </Link>

        <Divider variant='custom' />
        <Heading fontSize='1.4rem' fontFamily='Times New Roman'>
          <br />
          <Link href='mailto:thevillagelibrary.org@gmail.com'>
            <Text color='#7283fe' textDecoration='underline'>
              Click here to contact our Webmaster
            </Text>
          </Link>
        </Heading>
        <br />
        <Image alt='NewWing' src={NewWing} width='40.625rem' height='10rem' />
        <br />
        <Image
          alt='BackOfLibrary'
          src={BackOfLibrary}
          width='40.625rem'
          height='30.4375rem'
        />
        <br />
        <Image alt='Book' height='7.8125rem' src={BookA} width='10rem' />
      </VStack>
    </PageBodyNoSideMenu>
  );
}
