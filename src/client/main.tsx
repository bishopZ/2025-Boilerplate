import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as DataProvider } from 'react-redux';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import App from './App';
import { store } from './components/data/store';
import { ErrorPage } from './components/ui/error-page';
import './index.css';

export const ErrorFallback = ({ error }: FallbackProps) => (
  <ErrorPage message={error.message} />
);

const renderApp = (container: HTMLElement) => {
  createRoot(container).render(
    <StrictMode>
      <DataProvider store={store}>
        <ErrorBoundary fallbackRender={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </DataProvider>
    </StrictMode>,
  );
};

const root = document.getElementById('root');
if (root) {
  renderApp(root);
} else {
  console.error('Root element not found');
}
