import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import Story from '../UserStoryPreview';
import storiesData from '../../data/stories'

import styles from "./styles";

const Stories = () => {

  const [stories, setStories] = useState<any>([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      setStories(storiesData);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FlatList
      data={stories}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => <Story story={item}/>}
    />
  )
}

export default Stories;
