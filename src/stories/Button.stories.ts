import type { Meta, StoryFn } from '@storybook/vue3';
import  Button  from './Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta<typeof Button>;

type Story = StoryFn<typeof Button>;

export const Default: Story = (args, { argTypes, id }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button v-bind="$props" class="max-w-128" />`, // This does not work
  // template: `<Button v-bind="{label: 'Hello'}" class="max-w-128" />`, // This works
  // template: `<Button :label="'hello'" class="max-w-128" />`, // This works
});
Default.args = {
  label: "Hello"
};
