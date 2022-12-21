import React from 'react';
import { Box } from '@chakra-ui/react';
import { bannerText } from '@/constants';

export default function Banner({ width = 'full', name }) {
  let bannerWidth;
  switch (width) {
    case 'full':
      bannerWidth = '45rem';
      break;
    case 'part':
      bannerWidth = '35.75rem';
      break;
    default:
      break;
  }
  return (
    <Box
      textAlign='center'
      margin-right='auto'
      margin-left='auto'
      width={bannerWidth}
      fontSize='1.4375rem'
      color='#fff'
      fontWeight='bold'
      verticalAlign='middle'
      bg='#0b0c3a'
      marginBottom='.625rem'
      fontFamily='Times New Roman'>
      ~ {bannerText[name]} ~
    </Box>
  );
}
