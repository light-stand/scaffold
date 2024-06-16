import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Text, { TextProps } from './Text';

export default {
  title: 'Foundation',
  component: Text,
  argTypes: {
    bold: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: StoryFn<TextProps> = args => (
  <>
    <Text size="h1" {...args}>
      This is a H1
    </Text>
    <Text size="h2" {...args}>
      This is a H2
    </Text>
    <Text size="h3" {...args}>
      This is a H3
    </Text>
    <Text size="h4" {...args}>
      This is a H4
    </Text>
    <Text size="h5" {...args}>
      This is a H5
    </Text>
    <Text size="h6" {...args}>
      This is a H6
    </Text>
    <Text size="h7" {...args}>
      This is a H7
    </Text>
  </>
);

export const TextStory = Template.bind({});
TextStory.args = { bold: false };
TextStory.storyName = 'Text';
