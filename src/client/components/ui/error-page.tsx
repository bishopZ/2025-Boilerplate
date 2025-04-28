import { Text, Code, VStack, Heading } from '@chakra-ui/react';

const DEFAULT_CONTACT = 'support@domain.com';
const DEFAULT_TITLE = 'Something went wrong';

export const ErrorPage = ({ message }: { message: string }) => {
  return (
    <VStack
      role="alert"
      p={8}
      spaceY={4}
      alignItems="flex-start"
      maxW="container.md"
      mx="auto">
      <Heading as="h1" size="lg">
        {DEFAULT_TITLE}
      </Heading>
      <Text>
        Please contact the site administrator at{' '}
        <a href={`mailto:${DEFAULT_CONTACT}`}>
          {DEFAULT_CONTACT}
        </a>
        .
      </Text>
      <Code p={4} borderRadius="md" width="100%" whiteSpace="pre-wrap">
        {message}
      </Code>
    </VStack>
  );
};
