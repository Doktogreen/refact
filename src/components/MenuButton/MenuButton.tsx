import React from 'react';
import {Icons} from '../Icons/Icons';
import {Pressable} from 'react-native';
import {styles} from './MenuButton.style';
// import {iconName} from '../Icons/iconName';

type TViewLayout = {
  height: number;
  width: number;
  x: number;
  y: number;
};

interface Props {
  setViewMeasure?: (data: TViewLayout) => void;
  onPress: () => void;
  iconColor: string;
  // icon: keyof typeof iconName;
  children?: any;
}

export const MenuButton: React.FC<Props> = ({
  children,
  setViewMeasure,
  onPress,
  iconColor,
  // icon,
}) => {
  const onMeasureViewSize = (e: {
    nativeEvent: {
      layout: {height: number; width: number; x: number; y: number};
    };
  }) => {
    setViewMeasure ? setViewMeasure(e.nativeEvent.layout) : null;
  };
  return (
    <Pressable
      android_ripple={{color: 'lightgrey'}}
      style={styles.button}
      onLayout={onMeasureViewSize}
      onPress={onPress}>
      {/* <Icons name={icon} color={iconColor} /> */}
      {children}
    </Pressable>
  );
};
