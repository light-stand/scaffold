import React from 'react';
import { View } from 'react-native';
import { StoryFn, Meta } from '@storybook/react';

import ScrollContainer from '../../structure/ScrollContainer/ScrollContainer';
import UserPhoto, { UserPhotoProps } from './UserPhoto';

export default {
  title: 'Structure',
  component: UserPhoto,
  argTypes: {
    bold: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: StoryFn<UserPhotoProps> = () => (
  <ScrollContainer>
    <View className="flex flex-row flex-wrap">
      <UserPhoto
        source={{
          uri: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
        }}
        label="Liza"
        className="mb-6 basis-1/2 px-1"
      />
      <UserPhoto
        source={{
          uri: 'https://images.pexels.com/photos/3781543/pexels-photo-3781543.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
        }}
        blur={true}
        className="mb-6 basis-1/2 px-1"
      />
      <UserPhoto
        source={{
          uri: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
        }}
        label="Cris"
        instantConnect={true}
        className="mb-6 basis-1/2 px-1"
      />
      <UserPhoto
        source={{
          uri: 'https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
        }}
        label="Tony"
        isOnline={true}
        className="mb-6 basis-1/2 px-1"
      />
    </View>
    <View className="flex flex-row flex-wrap">
      <UserPhoto
        source={{
          uri: 'https://images.pexels.com/photos/16943627/pexels-photo-16943627/free-photo-of-hombre-camisa-sombrero-en-pie.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
        }}
        label="Paulo"
        className="mb-6 basis-1/3 px-1"
      />
      <UserPhoto
        source={{
          uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
        }}
        label="15/03/23"
        className="mb-6 basis-1/3 px-1"
      />
      <UserPhoto
        source={{
          uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
        }}
        label="15/03/23"
        buttonIcon="undo"
        className="mb-6 basis-1/3 px-1"
      />
    </View>
    <UserPhoto
      source={{
        uri: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load'
      }}
      buttonIcon="edit"
      className="mb-6 w-[176] px-1 self-center"
    />
  </ScrollContainer>
);

export const UserPhotoStory = Template.bind({});
UserPhotoStory.storyName = 'UserPhoto';
