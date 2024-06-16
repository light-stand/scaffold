import React from 'react';
import { Story, Meta } from '@storybook/react';

import Logo, { LogoProps } from './Logo';

export default {
  title: 'Foundation',
  component: Logo,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    label: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const LogoPrimary = Template.bind({});
LogoPrimary.args = {
  color: 'primary',
  label: true,
  width: 113,
  height: 193
};
LogoPrimary.storyName = 'Logo';
