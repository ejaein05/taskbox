import '../src/index.css'
//registers the msw addon
import { initialize, mswLoader  } from 'msw-storybook-addon';
//initialize MSW
initialize();

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
  //tags: ['autodocs']
};

export default preview;
