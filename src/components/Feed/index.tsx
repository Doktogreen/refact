import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import Post from "../Post";
import Stories from "../UserStoriesPreview";
import postsData from '../../data/stories'

const Feed = () => {

  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    try {
        setPosts(postsData);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
    />
  )
}

export default Feed;
