import { Storage } from 'aws-amplify';
///// upload image ////
const fetchImageUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  }
export const uploadFile = async (file) => {
    const video = await fetchImageUri(file.assets[0].uri);
    return Storage.put(`my-image-filename${Math.random()}.mov`,video, {
      level:'public',
      contentType:file.assets[0].type,
      progressCallback(uploadProgress){
        console.log('PROGRESS--', uploadProgress.loaded + '/' + uploadProgress.total);
      }
    })
    .then((res) => {
      Storage.get(res.key)
      .then((result) => {
        console.log('RESULT --- ', result);
        let awsImageUri = result.substring(0,result.indexOf('?'))
        console.log('RESULT AFTER REMOVED URI --', awsImageUri)
        setIsLoading(false)
      })
      .catch(e => {
        console.log(e);
      })
    }).catch(e => {
      console.log(e);
    })
  }
  ////end upload img ////