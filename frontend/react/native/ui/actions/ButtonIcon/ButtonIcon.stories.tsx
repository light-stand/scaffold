import React from 'react';
import { View } from 'react-native';
import { Story, Meta } from '@storybook/react';

import ButtonIcon, { ButtonIconProps } from './ButtonIcon';

export default {
  title: 'Actions',
  component: ButtonIcon
} as Meta;

const Template: Story<ButtonIconProps> = () => (
  <View className="flex flex-row gap-x-4">
    <ButtonIcon
      icon="chevron-right"
      variant="primary"
      size="medium"
      className="mb-2"
    />
    <ButtonIcon
      icon="chevron-right"
      variant="secondary"
      size="small"
      className="mb-2"
    />
    <ButtonIcon icon="tune" size="medium" className="mb-2" />
    <ButtonIcon icon="tune" className="mb-2" />
  </View>
);

export const ButtonIconStory = Template.bind({});
ButtonIconStory.args = {
  variant: 'primary',
  size: 'medium',
  icon: 'chevron-right',
  disabled: false
};
ButtonIconStory.storyName = 'ButtonIcon';
