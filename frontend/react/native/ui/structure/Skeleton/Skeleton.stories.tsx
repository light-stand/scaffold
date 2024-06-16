import React from 'react';
import { View } from 'react-native';
import { StoryFn, Meta } from '@storybook/react';

import Skeleton, { SkeletonProps } from './Skeleton';

export default {
  title: 'Structure',
  component: Skeleton,
  argTypes: {
    bold: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: StoryFn<SkeletonProps> = args => (
  <View>
    <Skeleton {...args} className="h-[200] w-[200] rounded-full mb-8" />
    <Skeleton {...args} className="h-[20] w-[300] rounded-full" />
  </View>
);

export const SkeletonStory = Template.bind({});
SkeletonStory.args = {};
SkeletonStory.storyName = 'Skeleton';
