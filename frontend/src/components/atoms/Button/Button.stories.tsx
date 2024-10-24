import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'small'],
    },
    size: {
      control: { type: 'select' },
      options: ['xxsm', 'xsm', 'sm', 'md', 'lg', 'xlg', 'fit'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    handleClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary Button',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    type: 'small',
    children: 'Small Button',
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    children: 'Disabled Button',
    size: 'md',
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button {...args} size="xxsm">
        XXSmall
      </Button>
      <Button {...args} size="xsm">
        XSmall
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="xlg">
        XLarge
      </Button>
    </div>
  ),
  args: {
    type: 'primary',
  },
};
