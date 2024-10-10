import axios from "axios";

const upload_preset = "ml_default";
const cloud_name = "dfjq2k5bj";

export const uploadToCloudinary = async (
  file: File
): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", upload_preset); // Замініть на ваш upload_preset з Cloudinary
  formData.append("cloud_name", cloud_name); // Замініть на ваш cloud_name з Cloudinary

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Повертає URL завантаженого зображення
    return response.data.secure_url;
  } catch (error) {
    console.error("Помилка під час завантаження на Cloudinary:", error);
    return null;
  }
};
