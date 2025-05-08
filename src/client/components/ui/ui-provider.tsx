import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';

const fonts = {
  base: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Avenir, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

// Chakra Theme support
const config = defineConfig({
  globalCss: {
    body: {
      fontFamily: fonts.base,
      lineHeight: '1.5',
      fontWeight: '400',
      color: 'text.default',
      bg: 'background.default',
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
    },
  },
});

const theme = createSystem(defaultConfig, config);

interface UIProviderProps {
  children: React.ReactNode
}

export const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
};
