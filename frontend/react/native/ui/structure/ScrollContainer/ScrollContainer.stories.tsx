import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Text from '../../foundation/Text/Text';

import Container, { ContainerProps } from '../Container/Container';

export default {
  title: 'Structure',
  component: Container,
  argTypes: {
    bold: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: StoryFn<ContainerProps> = () => (
  <Container>
    <Text>Text here</Text>
  </Container>
);

export const ContainerStory = Template.bind({});
ContainerStory.args = {};
ContainerStory.storyName = 'Container';
