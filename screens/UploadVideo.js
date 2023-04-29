import React, {  } from "react";
import { SafeAreaView} from "react-native";
import { CustomButton, CustomInput } from '../components';

const UploadVideo = () => {
  const onUpload = () => {
    console.log('Upload button clicked')
    
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomButton text="Upload Video" onPress={onUpload}/>
    </SafeAreaView>
  );
};

export default UploadVideo;
