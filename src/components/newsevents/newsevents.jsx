import { Heading, Text, ListItem, UnorderedList } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';

export default function NewsEvents({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Heading
        fontFamily='Times New Roman'
        h='1rem'
        fontSize='1.4rem'
        color='#42210A'
        fontWeight='bold'>
        THE VILLAGE LIBRARY
      </Heading>
      <Heading
        fontFamily='Times New Roman'
        h='1rem'
        fontSize='1.4rem'
        color='#42210A'
        fontWeight='bold'>
        PRESIDENT'S REPORT
      </Heading>
      <Heading
        fontFamily='Times New Roman'
        h='1rem'
        fontSize='1.2rem'
        color='#42210A'
        fontWeight='bold'>
        2021-2022
      </Heading>
      <br />
      <Text lineHeight='1.2rem' fontSize='1rem'>
        <strong>A YEAR DRIVEN BY PRIORITIES </strong>
        <br />
        The year began with a Board retreat that featured an acknowledgement of
        the accomplishments of the past year, team building, work on the mission
        statement, and identification of priorities for the upcoming year. Here
        is a list of those priorities with a brief summary of the results of
        work on that priority:
      </Text>
      <UnorderedList fontSize='1rem' paddingLeft='2rem' lineHeight='1.2rem'>
        <ListItem>
          Mission statement: adoption of a revised mission statement.
        </ListItem>
        <ListItem>
          Volunteer excellence: continuing efforts to improve training and
          strengthen communication.
        </ListItem>
        <ListItem>
          Fund raising & increased membership: increased programming with book
          signings and successful efforts to raise the visibility of the Spring
          and Fall book sale.
        </ListItem>
        <ListItem>
          Collection development: purchase of Children’s Core Collection to
          provide expert guidance in acquisitions and weeding for the Youth
          Room.
        </ListItem>
        <ListItem>
          Internal & external communication: monthly volunteer newsletter,
          creative use of social media, and successful publishing of articles in
          local media.
        </ListItem>
        <ListItem>
          Improved financial management: inaugural meeting of the Finance
          Committee, overhaul of financial policies, and initiating a Fidelity
          investment account.
        </ListItem>
        <ListItem>
          Succession planning: recruitment of assistants to aid sale book
          coordinators and other volunteers.
        </ListItem>
      </UnorderedList>
      <Text lineHeight='1.2rem' fontSize='1rem'>
        During the year, an additional priority emerged—that of reviewing and
        possibly updating the Library’s insurance. This includes adding a
        Directors and Officers policy.
        <br />
        <br />
        <strong>LOOKING TO THE FUTURE</strong>
        <br />
        The Village Library bylaws define its members as those people who hold a
        library card. The Board has a responsibility to its users and the
        community at large to preserve and protect the Library, its facilities,
        services, and resources. To that end, the Board must continue its
        efforts to manage its funds wisely, to protect and preserve the building
        and its contents, and to make every effort to improve the services and
        collections the Library offers.
        <br />
        <br />
        <strong>APPRECIATION</strong>
        <br />
        The Village Library exists because of the extraordinary effort of over
        75 dedicated volunteers who devote their time and talents daily. The
        success of this venture for more than twenty years is the result of
        dedication and effort of many people. I salute you.
        <br />
        <br />
        The members of the Board have each contributed to the Library’s success
        this past year. I thank you.
        <br />
        <br />
        The volunteers who manage the sale books and all the people under Kim
        Hicks’ leadership who help make the Spring and Fall book sales possible
        raise thousands of dollars each year to support the Library. I am
        grateful to you.
        <br />
        <br />
        No President succeeds without the work of many, many people—I appreciate
        each and every one of you.
        <br />
        <br />
        Sandy Cooper, President
        <br />
        2021-2022
      </Text>
    </PageBodySideMenu>
  );
}
