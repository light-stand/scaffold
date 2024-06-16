import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextLink, { TextLinkProps } from './TextLink';

export default {
  title: 'Actions',
  component: TextLink,
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

const Template: Story<TextLinkProps> = args => (
  <>
    <TextLink
      label="Já tem uma conta?"
      className="text-xl font-sans-bold mb-4"
    />
    <TextLink
      label="Já tem uma conta?"
      align="center"
      className="text-gray-3 mb-4"
    />
    <TextLink label="Já tem uma conta?" align="right" className="text-gray-3" />
  </>
);

export const TextLinkStory = Template.bind({});
TextLinkStory.storyName = 'TextLink';
