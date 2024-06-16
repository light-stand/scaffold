import React from 'react';
import { View } from 'react-native';
import { StoryFn, Meta } from '@storybook/react';

import Image, { ImageProps } from './Image';

export default {
  title: 'Structure',
  component: Image,
  argTypes: {
    bold: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: StoryFn<ImageProps> = () => (
  <View className="items-center">
    <Image
      source={{ uri: 'https://wallpaperaccess.com/full/220324.jpg' }}
      className="h-[170] w-[300] mb-5"
    />
    <Image
      source={{
        uri: 'https://images.pexels.com/photos/16943627/pexels-photo-16943627/free-photo-of-hombre-camisa-sombrero-en-pie.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
      }}
      className="h-[200] w-[200] rounded-full mb-5"
    />
    <Image
      source={{
        uri: 'https://images.pexels.com/photos/16943627/pexels-photo-16943627/free-photo-of-hombre-camisa-sombrero-en-pie.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
      }}
      className="h-16 w-16 rounded-full"
    />
  </View>
);

export const ImageStory = Template.bind({});
ImageStory.args = {};
ImageStory.storyName = 'Image';
