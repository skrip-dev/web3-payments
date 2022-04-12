import React from 'react';
import { IconType } from 'react-icons';
import { FiHome, FiSettings } from 'react-icons/fi';

import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { appConfig } from '~/configs/app';

import { NavItem } from './NavItem';

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Settings', icon: FiSettings },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent: React.FC<SidebarProps> = ({
  onClose,
  ...rest
}) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {appConfig.appNameShort}
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
