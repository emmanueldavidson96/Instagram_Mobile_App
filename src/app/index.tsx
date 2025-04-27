import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

export default function Home() {
  return (
    <Redirect href={"/(tabs)"} />
  )
}