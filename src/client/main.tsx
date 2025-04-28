import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as DataProvider } from 'react-redux';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import App from './App';
import { UIProvider } from './components/ui/ui-provider';
import { store } from './components/data/store';
import { ErrorPage } from './components/ui/error-page';
import './index.css';

const ErrorFallback = ({ error }: FallbackProps) => (
  <ErrorPage message={error.message} />
);

const renderApp = (container: HTMLElement) => {
  createRoot(container).render(
    <StrictMode>
      <DataProvider store={store}>
        <UIProvider>
          <ErrorBoundary fallbackRender={ErrorFallback}>
            <App />
          </ErrorBoundary>
        </UIProvider>
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
