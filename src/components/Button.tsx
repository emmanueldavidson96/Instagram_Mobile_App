import { View, Text, Pressable } from 'react-native'
import React from 'react'

type ButtonProps = {
    title:string;
    onPress:() => void;
}
export default function Button({title, onPress}:ButtonProps) {
  return (
    <Pressable className='bg-blue-500 w-full p-3 items-center rounded-md' onPress={onPress}>
        <Text className='text-white font-semibold'>{title}</Text>
    </Pressable>
  )
}