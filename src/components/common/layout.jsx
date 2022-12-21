import React from 'react';
import {
  Outlet,
  NavLink,
  useLocation,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import { Box, Center, Flex, HStack, Link, VStack } from '@chakra-ui/react';
import { NavBarH, NavBarV } from '@/components';
import { pages } from '@/constants';
import { brand } from '@/styles';
export default function Layout() {
  function clearLocalStorage() {
    localStorage.clear();
  }
  const { pathname } = useLocation();
  const currentMainPage = pages
    .filter((obj) => obj.path !== '')
    .find((obj) => pathname.includes(`/${obj.path}`));
  return (
    <>
      <Center>
        <VStack w='46.875rem' spacing='3'>
          <Box
            onClick={clearLocalStorage}
            id='header'
            bg={brand.headerBackground}
            margin-right='auto'
            margin-left='auto'
            w='46.875rem'
            color={brand.headerColor}
            textAlign='center'
            fontSize='2.5rem'
            height='auto'
            margin='0.625rem auto auto auto'
            fontWeight='bold'
            fontFamily='Lucida Calligraphy'>
            <span style={{ fontSize: '1rem' }}>Skidaway</span> ~&nbsp;The
            Village Library&nbsp;~{' '}
            <span style={{ fontSize: '1rem' }}>Island </span>
          </Box>
          <HStack spacing={3.5} as='nav' width='46.875rem' ml='auto' mr='auto'>
            <NavBarH />
          </HStack>
          <Flex w='45rem'>
            {currentMainPage?.subPages && (
              <NavBarV mainPage={currentMainPage} />
            )}
            <Outlet />
          </Flex>
        </VStack>
      </Center>
    </>
  );
}
