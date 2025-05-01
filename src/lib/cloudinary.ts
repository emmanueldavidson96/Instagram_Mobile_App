import {Cloudinary, transformationStringFromObject} from "@cloudinary/url-gen"

//Create a Cloudinary instance and set your cloud name
export const cloudinaryInit = new Cloudinary({
    cloud:{
      cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME
    }
  })