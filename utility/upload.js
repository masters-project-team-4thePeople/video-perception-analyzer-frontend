import { Storage } from 'aws-amplify';
import { Alert } from 'react-native';
///// upload image ////
const fetchImageUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  }
  
const callVideoMetaData = async (video_url, title, duration) => {
  const data = new FormData();
  data.append('video_url', video_url)
  data.append('video_title', title)
  data.append('video_duration', duration)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data
  };
  try {
    const response = await fetch('http://68.183.20.147/videos-api/details/', requestOptions);
    const json = await response.json();
  } catch (error) {
    Alert.alert('Error occured while uploading')
    console.error(error);
  }
}

export const uploadFile = async (file, userinfo) => {
  console.log(userinfo)
  // const video = await fetchImageUri(file.assets[0].uri);
  const data = new FormData();
  data.append('user_name', userinfo)
  data.append('video', {
    uri: file.assets[0].uri,
    type: file.assets[0].type,
    name: file.assets[0].fileName
  });
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data
    };
    try {
      // console.log(data)
      const response = await fetch('http://68.183.20.147/videos-api/spaces/', requestOptions);
      const json = await response.json();
      console.log(json)
      callVideoMetaData(json["video_url"], file.assets[0].fileName, file.assets[0].duration);
      return json
    } catch (error) {
      Alert.alert('Error occured while uploading')
      console.error(error);
    }
  }
    // const video = await fetchImageUri(file.assets[0].uri);
    // return Storage.put(`my-image-filename${Math.random()}.mov`,video, {
    //   level:'public',
    //   contentType:file.assets[0].type,
    //   progressCallback(uploadProgress){
    //     console.log('PROGRESS--', uploadProgress.loaded + '/' + uploadProgress.total);
    //   }
    // })
    // .then((res) => {
    //   Storage.get(res.key)
    //   .then((result) => {
    //     console.log('RESULT --- ', result);
    //     let awsImageUri = result.substring(0,result.indexOf('?'))
    //     console.log('RESULT AFTER REMOVED URI --', awsImageUri)
    //     setIsLoading(false)
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   })
    // }).catch(e => {
    //   console.log(e);
    // })
  // }
  ////end upload img ////