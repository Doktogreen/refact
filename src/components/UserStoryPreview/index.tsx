import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import ProfilePicture from "../ProfilePicture";

const Story = (props?: any) => {
  const {
    story: {
      user: {
        id,
        imageUri,
        name
      }
    }
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    // navigation.navigate("Story", { userId: id });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri}/>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Story;
