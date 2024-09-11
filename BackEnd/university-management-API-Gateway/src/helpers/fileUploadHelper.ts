import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';
import config from '../config';
import streamifier from 'streamifier';
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret
});
const storage = multer.memoryStorage(
//   {
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// }
);
const upload = multer({ storage: storage });
const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error:Error, result:ICloudinaryResponse) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
    const buffer = file.buffer as unknown as Buffer;
    // Upload directly from the buffer using streamifier
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};
export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
