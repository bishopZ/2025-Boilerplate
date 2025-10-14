import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './components/data/store';
import { useEffect, lazy, Suspense } from 'react';
import { initPlayer } from './components/data/player-actions';
import { ErrorPage } from './components/ui/error-page';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Lazy load pages for better performance
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const { encryptionKey, loading, error } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initPlayer());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage message={error} />;

  return (
    <>
      {!encryptionKey && <LoadingSpinner />}
      {encryptionKey && (
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
