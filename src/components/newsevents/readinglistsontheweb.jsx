import tgarx from '@/images/TGARX.gif';
import { Heading, Image, Link } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function ReadingListsOnTheWeb({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Heading
        fontFamily='Times New Roman'
        margin='.5rem 0 .0625rem 0'
        padding='0'
        fontSize='1.4rem'
        color='#42210A'
        fontWeight='bold'
        fontStyle='italic'
        textAlign='center'>
        On its 125th anniversary, the New York Public Library published this
        list:{' '}
        <Link
          color='#0000ee'
          textDecoration='underline'
          href='https://www.nypl.org/125/topcheckouts'>
          Top 10 Checkouts of All Time
        </Link>
      </Heading>
      <br />
      <Heading
        fontFamily='Times New Roman'
        margin='.5rem 0 .0625rem 0'
        padding='0'
        fontSize='1.4rem'
        color='#42210A'
        fontWeight='bold'
        fontStyle='italic'
        textAlign='center'>
        This site lists all mysteries by an author by publishing date:{' '}
        <Link
          color='#0000ee'
          textDecoration='underline'
          href='http://stopyourekillingme.com'>
          Stop, You're Killing Me!
        </Link>
      </Heading>
      <br />
      <Heading
        fontFamily='Times New Roman'
        margin='.5rem 0 .0625rem 0'
        padding='0'
        fontSize='1.4rem'
        color='#42210A'
        fontWeight='bold'
        fontStyle='italic'
        textAlign='center'>
        A national survey conducted by PBS published this list of America's 100
        most-loved books:
        <Link
          fontFamily='Times New Roman'
          margin='.5rem 0 .0625rem 0'
          padding='0'
          fontSize='1.4rem'
          fontWeight='bold'
          fontStyle='italic'
          textAlign='center'
          color='#0000ee'
          textDecoration='underline'
          href='http://www.pbs.org/the-great-american-read/books/#/'>
          The Great American Read
        </Link>
      </Heading>

      <Heading
        fontFamily='Times New Roman'
        borderStyle='none'
        borderColor='inherit'
        fontSize='1rem'
        padding='0'>
        Our collection includes all except those marked "X" below.
      </Heading>
      <Image alt='The Great American Read' src={tgarx} />
    </PageBodySideMenu>
  );
}
