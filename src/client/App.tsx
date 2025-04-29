import { Heading, Button, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './components/data/store';
import { increment } from './components/data/player';
import { useEffect } from 'react';
import { initPlayer } from './components/data/player-actions';
import { ErrorPage } from './components/ui/error-page';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { AppDispatch } from './components/data/store';

const App = () => {
  const { score, encryptionKey, loading, error } = useSelector((state: RootState) => state.player);
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initPlayer());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage message={error} />;

  return <>
    <Flex
      gap={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      maxW="100vw">
      {!encryptionKey && <Heading as="h1">Loading...</Heading>}
      {encryptionKey && <>
        <Heading as="h1">
          Welcome to 2025 Boilerplate! ({score})
        </Heading>
        <Button
          variant="solid"
          size="sm"
          mt={4}
          onClick={() => dispatch(increment())}>
          Next
        </Button>
      </>}
    </Flex>
  </>;
};

export default App;
