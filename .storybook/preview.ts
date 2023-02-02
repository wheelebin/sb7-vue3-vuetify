import { setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';
import { makeDecorator } from '@storybook/preview-api';
import * as components from 'vuetify/components'

setup((app) => {
  // Registers your app's plugins into Storybook
  const vutetify = createVuetify({ components })
  app.use(vutetify);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  makeDecorator({
    name: 'test',
    parameterName: 'component',
    wrapper: (storyFn, context, { parameters }) => {
      return {
        components: { WrappedComponent: storyFn(context) },
        template: `
          <v-app>
            <v-container>
              <WrappedComponent />
            </v-container>
          </v-app>`,
      };
    },
  })
]
