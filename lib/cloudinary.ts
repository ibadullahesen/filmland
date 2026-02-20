import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getVideos = async () => {
  const resources = await cloudinary.search
    .expression('resource_type:video')
    .sort_by('created_at','desc')
    .execute();
  return resources.resources;
};
