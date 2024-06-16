import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Actions',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    },
    label: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    block: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: Story<ButtonProps> = args => (
  <>
    <Button {...args} disabled icon={null} />
    <Button {...args} />
  </>
);

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  label: 'Button',
  variant: 'primary',
  size: 'medium',
  block: false,
  icon: 'chevron-right',
  disabled: false,
  style: { marginBottom: 8 }
};
ButtonStory.storyName = 'Button';
