export interface SEOMetadata {
  title: string;
  author: string;
  description: string;
  image: string;
  url: string;
}

// Default SEO metadata for the application
export const defaultSEO: SEOMetadata = {
  title: '2025 Boilerplate',
  author: 'BishopZ',
  description: 'A local-first boilerplate for 2025',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1365px-African_Bush_Elephant.jpg',
  url: 'https://github.com/bishopz/2025-boilerplate',
};

// Helper function to merge custom SEO data with defaults
export const getSEO = (custom: Partial<SEOMetadata> = {}): SEOMetadata => ({
  ...defaultSEO,
  ...custom,
});

