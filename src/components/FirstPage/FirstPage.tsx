import React from 'react';
import {View} from 'react-native';
import imageDatas from '../../data/imageData.json';
import {styles} from './FirstPage.style';
import { Button } from '../Button/Button';
import { ImageRow } from '../ImageRow/ImageRow';

export const FirstPage = () => {
  return (
    <View>
      <View style={styles.container}>
        <Button
          icon="media"
          iconSize={26}
          backgroundColor="white"
          text="3rd Grd Dropout"
          textStyle={styles.text}
          outlined
          style={styles.leftButton}
        />
        <Button
          icon="media"
          iconSize={26}
          backgroundColor="white"
          text="Marc Mero Parts"
          textStyle={styles.text}
          outlined
          style={styles.rightButton}
        />
      </View>
      <ImageRow data={imageDatas} />
    </View>
  );
};
