import React from 'react';

import {
  Box,
  Button,
  Container,
  createIcon,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

import { SidebarWithHeader } from '~/components/Dashboard/DashboardBase';
import { useWeb3 } from '~/hooks/useWeb3';

const PageComponent: NextPage = () => {
  const { active, connectWallet, disconnectWallet } = useWeb3();

  return (
    <SidebarWithHeader>
      <h1>Content</h1>
    </SidebarWithHeader>
  );
};

export default PageComponent;
