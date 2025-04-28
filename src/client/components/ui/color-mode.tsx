import { ThemeProvider, ThemeProviderProps, useTheme } from 'next-themes';
import { useCallback, useMemo } from 'react';

export const COLOR_MODES = ['light', 'dark'] as const;
export type ColorMode = typeof COLOR_MODES[number];

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

const isValidColorMode = (theme: string | undefined): theme is ColorMode => {
  return typeof theme === 'string' && COLOR_MODES.includes(theme as ColorMode);
};

export const useColorMode = (): UseColorModeReturn => {
  const { resolvedTheme, setTheme } = useTheme();
  const colorMode = useMemo(() => {
    if (!isValidColorMode(resolvedTheme)) {
      return 'light' as ColorMode; // Fallback to light mode
    }
    return resolvedTheme;
  }, [resolvedTheme]);

  const toggleColorMode = useCallback(() => {
    setTheme(colorMode === 'dark' ? 'light' : 'dark');
  }, [colorMode, setTheme]);
  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  };
};

export const useColorModeValue = <T, >(light: T, dark: T): T => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
};

export const ColorModeProvider = (props: ThemeProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
      {...props}
    />
  );
};
