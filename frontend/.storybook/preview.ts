import type { Preview } from '@storybook/react';
import '../src/components/stylesheets/reset.css';

const preview: Preview = {
  parameters: {
    controls: {
      matches: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
