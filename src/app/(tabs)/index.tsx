import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import posts from "~/assets/data/posts.json";
import {Feather, Ionicons, AntDesign} from "@expo/vector-icons"
import PostListItem from '~/src/components/PostListItem';

export default function FeedScreen() {
  
  return (
    <FlatList
      data={posts}
      contentContainerStyle={{gap:10}}
      renderItem={({item}) => <PostListItem post={item}/>}
      showsVerticalScrollIndicator={false}
    />      
  )
}

