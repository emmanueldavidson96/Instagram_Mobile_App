import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker"
import Button from '~/src/components/Button';
// import {AdvancedImage} from "cloudinary-react-native";
// import {Cloudinary} from "@cloudinary/url-gen"

//Create a Cloudinary instance and set your cloud name
// const cloudinaryInit = new Cloudinary({
//   cloud:{
//     cloudName:""
//   }
// })

export default function ProfileScreen() {
  const [caption, set_caption] = useState("");   
  const [image, set_image] = useState<string | null>(null);
  const [username, set_username] = useState("");

  // cloudinary image
  // const myImage = cloudinaryInit.image("")
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[1,1],
      quality:1,
    })
    // console.log(result);
    if(!result.canceled){
      set_image(result.assets[0].uri)
    }
  }
  
  return (
    <View className='p-3 flex-1'>
      {/* Avatar Image Picker */}
      {
        image 
        ? <Image  
            source={{
              uri:image
            }}
            className='w-52 aspect-square self-center rounded-full shadow-md'
          /> 
        : <View className='w-52 aspect-square rounded-full self-center bg-slate-300'/>
      }
      <Text onPress={pickImage} className='text-blue-500 font-semibold m-5 self-center'>Change</Text>
      {/* Form  */}

      <Text className='mb-2 text-gray-500 font-semibold '>Username</Text>

      {/* Content */}
      {/* <AdvancedImage 
        cldImg={myImage}
        className='w-full aspect-[4/3]'
      /> */}


      <TextInput 
        value={username}
        placeholder='Username'
        onChangeText={set_username}
        className='border border-gray-300 p-2 rounded-md'
      />
      {/* Button */}
      <View className='gap-3 mt-auto'>
        <Button title={"Update Profile"} onPress={() => {}}/>
        <Button title={"Sign Out"} onPress={() => {}}/>
      </View>
    </View>
  )
}