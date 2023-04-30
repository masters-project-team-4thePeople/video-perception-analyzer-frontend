import React, { useState } from "react";
import { SafeAreaView, View, Text} from "react-native";
import { CustomButton, CustomInput } from '../components';
import {launchImageLibraryAsync} from "expo-image-picker";
import { uploadFile } from "../utility/upload";

const UploadVideo = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await launchImageLibraryAsync({
      mediaTypes: "Videos"
    });
    if (pickerResult.canceled === true) {
      return;
    }
    console.log(pickerResult);
    uploadFile(pickerResult)
    setSelectedImage({ localUri: pickerResult.assets });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomButton onPress={openImagePickerAsync} text={"Upload Image"}/>
      {
        selectedImage !== null ??
        (
          <View>
        <Text>Video Successfully Uploaded!</Text>
      </View>
        )
      }
    </SafeAreaView>
  );
};

export default UploadVideo;
