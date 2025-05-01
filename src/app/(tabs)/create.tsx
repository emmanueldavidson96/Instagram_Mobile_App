import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from "expo-image-picker"
import Button from '~/src/components/Button';
import { upload } from 'cloudinary-react-native';
import { cloudinaryInit } from '~/src/lib/cloudinary';

export default function CreatePost() {
  const [caption, set_caption] = useState("");   
  const [image, set_image] = useState<string | null>(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1,
    })
    // console.log(result);
    if(!result.canceled){
      set_image(result.assets[0].uri)
    }
  }
  useEffect(() => {
    if(!image){
      pickImage();
    } 
  }, [])

  const uploadImage = async () => {
    // upload the image to cloudinary
    if(!image){
      return
    }
    const options = {
      upload_preset: 'Default',
      unsigned: true,
    }

    return new Promise((resolve, reject) => {
      upload(cloudinaryInit, 
        {
          file: image , 
          options: options, 
          callback: (error: any, response: any) => {
          //.. handle response
          if (error) {
            console.error("Upload error:", error);
            reject(error); // Properly reject the promise
          } else if (response?.secure_url) {
            console.log("Upload response:", response);
            resolve(response.secure_url); // Return the uploaded image URL
          } else {
            reject(new Error("No secure_url in response"));
          }
      }})
    })
  
  }

  const createPost = async () => {
    try {
      const imageUrl = await uploadImage();
  
      if (!imageUrl) {
        console.error("Image upload failed.");
        return;
      }
  
      // Save post to database (replace this with your actual logic)
      // const post = {
      //   caption,
      //   image: imageUrl,
      //   createdAt: new Date().toISOString(),
      // };
  
      // console.log("Post to save:", post);
      // await savePostToDB(post); // replace with actual DB call
  
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }


  return (
    <View className='p-3 items-center flex-1'>
      {/* Image Picker */}
      {
        image 
        ? <Image 
            source={{
              uri:image
            }}
            className='w-52 aspect-[3/4] rounded-lg shadow-md'
          /> 
        : <View className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>
      }
      <Text className='text-blue-500 font-semibold m-5 ' onPress={pickImage}>Change</Text>

      {/* TextInput for caption */}
      <TextInput 
        placeholder='What is on yur mind?'
        className=' w-full p-3 '
        onChangeText={(newValue) => set_caption(newValue)}
        value={caption}
      />

      {/* Button */}
      <View className='mt-auto w-full'>
       <Button title="Share" onPress={createPost}/>
      </View>
    </View>
  )
}

