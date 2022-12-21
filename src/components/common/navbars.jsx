import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Center, HStack, Link, VStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { brand } from '@/styles';
import { pages } from '@/constants';

const activeHStyle = {
  color: '#FFFFFF',
  backgroundColor: brand.hLinkBackgroundActive,
  outline: 0,
};

const activeVStyle = {
  color: '#FFFFFF',
  backgroundColor: brand.vLinkBackgroundActive,
  outline: 0,
};

const navBarHItems = pages.map((page) => {
  let path = `${page.path}`;

  return (
    <Link
      key={uuidv4()}
      as={NavLink}
      to={path}
      height='auto'
      width='fit-content'
      fontSize='.8125rem'
      fontFamily='Arial, Hevetica, sans-serif'
      padding='.125rem .625rem .1875rem .625rem'
      color={brand.hLinkColor}
      bg={brand.hLinkBackground}
      margin='.1875rem'
      fontWeight='bold'
      _hover={{ color: brand.hLinkColorHover }}
      _focus={{ outline: 0 }}
      style={({ isActive }) => (isActive ? activeHStyle : undefined)}>
      {page.name}
    </Link>
  );
});

export const NavBarH = () => {
  return (
    <>
      <p></p>
      {navBarHItems}
    </>
  );
};

const navBarVItems = (mainPage) =>
  mainPage.subPages.map((subPage) => {
    return (
      <Link
        key={uuidv4()}
        as={NavLink}
        to={subPage.path}
        marginTop='.25rem'
        textAlign='center'
        width='8.75rem'
        float='left'
        diplay='block'
        height='auto'
        fontSize='0.8rem'
        fontFamily='Times New Roman'
        padding='.125em .875em .25em .12'
        border='1px solid'
        borderColor={brand.vLinkBackgroundActive}
        color={brand.vLinkColor}
        bg={brand.vLinkBackground}
        margin='0 0 .3125em 0'
        textDecoration='none'
        fontWeight='bold'
        _hover={{ color: brand.vLinkColorHover }}
        _focus={{ outline: 0 }}
        style={({ isActive }) => (isActive ? activeVStyle : undefined)}>
        {subPage.name}
      </Link>
    );
  });

export const NavBarV = ({ mainPage }) => {
  return (
    <VStack spacing={1} as='nav'>
      {navBarVItems(mainPage)}
    </VStack>
  );
};
