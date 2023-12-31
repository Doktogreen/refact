
import React from 'react';
import {Pressable, TextStyle, ViewStyle} from 'react-native';
import {styles} from './Button.style';
import { iconName } from '../Icons/iconName';
// import { Icons } from '../Icons/Icons';
import { CustomText } from '../CustomText/CustomText';

type Props = {
  text?: string;
  icon?: keyof typeof iconName;
  backgroundColor?: string;
  outlined?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconSize?: number;
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({
  text,
  icon,
  backgroundColor = '#ea4359',
  outlined,
  style,
  textStyle,
  onPress,
  iconSize,
}) => {
  return (
    <Pressable
      android_ripple={{color: 'lightgrey'}}
      style={[
        styles.container,
        style,
        {backgroundColor, borderWidth: outlined ? 1 : 0},
      ]}
      onPress={onPress}>
      {/* {icon && <Icons name={icon} size={iconSize} />} */}
      {text && (
        <CustomText
          style={textStyle}
          color={backgroundColor === '#ea4359' ? 'white' : 'black'}
          weight="SemiBold">
          {text}
        </CustomText>
      )}
    </Pressable>
  );
};
