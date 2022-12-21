import { Image, Text } from '@chakra-ui/react';
import { PageBodySideMenu } from '@/components';
import SandyAndJane from '../../pictures/SandyAndJane.JPG';
import SandyAndKathy from '../../pictures/SandyAndKathy.JPG';
import SandyAndPhil from '../../pictures/SandyAndPhil.jpg';
import SandyAndSally from '../../pictures/SandyAndSally.jpg';
import SandyAndJoy from '../../pictures/SandyAndJoy.jpg';
import KenAndSue from '../../pictures/KenAndSue.JPG';
import SueAndPhil from '../../pictures/SueAndPhil.JPG';
import SueAndAllison from '../../pictures/SueAndAllison.JPG';
import SueAndJanet from '../../pictures/SueAndJanet.JPG';
import SueAndAnn from '../../pictures/SueAndAnn.JPG';

export default function OutgoingBoardMembers({ name }) {
  return (
    <PageBodySideMenu name={name}>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SandyAndJane}
        alt='Sandy and Jane'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0 .625rem 0 .625rem'
        fontFamily='Times New Roman'>
        Village Library President, Sandy Cooper, presents a certificate of
        appreciation to Jayne Hoover, who leaves the Board after serving as
        secretary.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SandyAndKathy}
        alt='Sandy and Kathy'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0 .625rem 0 .625rem'
        fontFamily='Times New Roman'>
        Village Library President, Sandy Cooper, presents a certificate of
        appreciation to Kathy Berlin, who leaves the board after serving as
        CD/DVD manager.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SandyAndPhil}
        alt='Sandy and Phil'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0 .625rem 0 .625rem'
        fontFamily='Times New Roman'>
        Village Library President, Sandy Cooper, presents a certificate of
        appreciation and gift card to Phil Van Ess in recognition of his years
        of service as Facilities Manager.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SandyAndSally}
        alt='Sandy and Sally'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0 .625rem 0 .625rem'
        fontFamily='Times New Roman'>
        Village Library President, Sandy Cooper, presents a certificate of
        appreciation to Sally Arman, who leaves the Board after serving for 7
        years as Volunteer Coordinator.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SandyAndJoy}
        alt='Sandy and Joy'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0 .625rem 0 .625rem'
        fontFamily='Times New Roman'>
        Village Library President, Sandy Cooper, presents a certificate of
        appreciation to Joy Howard, who leaves the Board after serving 6 years
        as Treasurer
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={KenAndSue}
        alt='Ken and Sue'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0px 10px 0px 10px'
        fontFamily='Times New Roman'>
        Village Library President, Ken Goode, presents a certificate of
        appreciation to outgoing President, Sue Storer, for her three years as
        President and two years as Vice President Operations.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SueAndJanet}
        alt='Sue and Janet'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0px 0px 0px 10px'
        fontFamily='Times New Roman'>
        Village Library President, Sue Storer, presents a certificate of
        appreciation to outgoing board member Janet Murphy for her six years as
        Children's Section Manager.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SueAndPhil}
        alt='Sue and Phil'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0px 0px 0px 10px'
        fontFamily='Times New Roman'>
        Village Library President, Sue Storer, presents a certificate of
        appreciation to outgoing board member Phil Van Ess for his six years as
        Facilities Manager.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SueAndAnn}
        alt='Sue and Ann'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0px 0px 0px 10px'
        fontFamily='Times New Roman'>
        Village Library President, Sue Storer, presents a certificate of
        appreciation to outgoing board member Ann Yingling, who was in charge of
        new volunteer training.
      </Text>
      <Image
        htmlWidth='550'
        objectFit='cover'
        src={SueAndAllison}
        alt='Sue and Allison'
      />
      <Text
        fontSize='1rem'
        mb='1.875rem'
        borderColor='blue.500'
        borderWidth='.0625rem'
        borderStyle='solid none solid none'
        padding='0px 0px 0px 10px'
        fontFamily='Times New Roman'>
        Village Library President, Sue Storer, presents a certificate of
        appreciation to outgoing board member Allison Smith, who was Publicity
        Chair.
      </Text>
    </PageBodySideMenu>
  );
}
