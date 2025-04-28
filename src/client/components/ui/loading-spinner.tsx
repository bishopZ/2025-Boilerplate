import { Spinner, Flex } from '@chakra-ui/react';

export const LoadingSpinner = () => (
  <Flex h="100vh" alignItems="center" justifyContent="center">
    <Spinner size="xl" />
  </Flex>
);
