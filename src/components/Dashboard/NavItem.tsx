import React, { ReactText } from 'react';
import { IconType } from 'react-icons';

import { Flex, FlexProps, Icon, Link } from '@chakra-ui/react';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  children,
  ...rest
}) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'green.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
