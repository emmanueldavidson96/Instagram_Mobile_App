import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function About() {
  return (
    <View>
      <Text>About Us Page</Text>
      <Link href={"/"}>Go back to Home Page</Link>
    </View>
  )
}