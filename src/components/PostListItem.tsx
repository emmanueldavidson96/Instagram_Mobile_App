import { View, Text, Image } from 'react-native'
import React from 'react'
import {Feather, Ionicons, AntDesign} from "@expo/vector-icons"
import {AdvancedImage} from "cloudinary-react-native";
import {transformationStringFromObject} from "@cloudinary/url-gen"
import { cloudinaryInit } from '../lib/cloudinary';


export default function PostListItem({post}) {
   // cloudinary image
   const myImage = cloudinaryInit.image(post.image)
   const transformation = transformationStringFromObject([
    {gravity: "face", height: 150, width: 150, crop: "thumb"},
    // {radius: 20},
    // {effect: "sepia"},
    // {overlay: "cloudinary_icon"},
    // {width: 50, crop: "scale"},
    // {opacity: 60},
    // {effect: "brightness:90"},
    // {flags: "layer_apply", gravity: "south_east", x: 5, y: 5},
    // {angle: 10},
    // {fetch_format: "png"}
    ]);
    const avatar_transformation = transformationStringFromObject([
      {gravity: "face", height: 48, width: 48, crop: "thumb"},
      // {radius: 20},
      // {effect: "sepia"},
      // {overlay: "cloudinary_icon"},
      // {width: 50, crop: "scale"},
      // {opacity: 60},
      // {effect: "brightness:90"},
      // {flags: "layer_apply", gravity: "south_east", x: 5, y: 5},
      // {angle: 10},
      // {fetch_format: "png"}
      ]);
   myImage.addTransformation(transformation);
   const avatar_img = cloudinaryInit.image(post.user.avatar_url);
   avatar_img.addTransformation(avatar_transformation);

  return (
    <View className='bg-white'>   
      {/* Header */}
      <View className="p-3 flex-row items-center gap-2">
        <AdvancedImage 
          cldImg={avatar_img}
          className='w-12 rounded-full aspect-square'
        />
        <Text className='font-semibold'>{post.user.username}</Text>
      </View>
      {/* Content */}
      <AdvancedImage 
        cldImg={myImage}
        className='w-full aspect-square'
      />
      {/* <Image 
        source={{uri:post.image_url}}
        className='w-full aspect-square'
      />    */}
      <View className='flex-row gap-3 p-3' >
        
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} className="ml-auto" /> 
      </View>  
    </View>
  )
}