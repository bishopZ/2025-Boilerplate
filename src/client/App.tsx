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
    <div className="container" role="main">
      {!encryptionKey && <h1>Loading...</h1>}
      {encryptionKey && <>
        <header>
          <h1>Welcome to the 2025 Boilerplate! ({score})</h1>
        </header>
        <button
          className="primary"
          type="button"
          onClick={() => dispatch(increment())}>
          Next
        </button>
      </>}
    </div>
  </>;
};

export default App;
