'use client'
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '../../../../firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import ProgressBar from './_components/ProgressBar';
import { doc, getFirestore, setDoc, collection, addDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '../../../_utils/GenerateRandomString';


function Upload() {

  const {user}=useUser();
  const [progress,setProgress]=useState();
  const [uploadCompleted,setUploadCompleted]=useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const storage = getStorage(app); 
  const db = getFirestore(app);
  console.log("Firestore initialized:", db);
  
  const uploadFile = (file) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      const storageRef = ref(storage, 'file-upload/' + file?.name);
      const uploadTask = uploadBytesResumable(storageRef, file, file.type);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log('Upload is ' + progress + '% done');

          if (progress === 100) {
            setProgress(progress);
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              saveInfo(file,downloadURL);
              
              setIsUploading(false);
            });
          }
        },
        (error) => {
          console.error('Upload error:', error);
          setIsUploading(false);
        }
      );
    } catch (error) {
      console.error('Error in uploadFile:', error);
      setIsUploading(false);
    }
  };
  const saveInfo=async(file,fileUrl)=>{
    try{const docId=Date.now().toString();
    await addDoc(collection(db, "uploadedFile"), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl:fileUrl,
      userEmail:user?.primaryEmailAddress.emailAddress,
      userName:user?.fullName,
      password:'',
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()
    })
    console.log("Firestore Data:", data); // Log the data
  }
  catch (e) {
    console.error("Error adding document: ", e);
  }
    
  }
  
  
  

  useEffect(()=>{
    console.log("Trigger")

    progress==100&&setTimeout(()=>{
      setUploadCompleted(true);
    }, 2000)
  }, [progress==100]);

  useEffect(()=>{
    uploadCompleted&&setTimeout(()=>{
      setUploadCompleted(false);
      window.location.reload
    }, 2000)

    
  }, [uploadCompleted==true]);


  return (
    <div className='p-5 px-8 md:px-28'>  
    <button onClick={saveInfo}>Save</button>
      <h2 className='text-[20px] text-center m-5'>
        Start <span className="font-bold text-blue-500">Uploading</span> files and <span className="font-bold text-blue-500">Share</span> it
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress}/>
      {isUploading && (
        <div className="mt-4">
          <ProgressBar progress={uploadProgress} />
          <p className="text-center mt-2 text-sm text-gray-600">
            {uploadProgress.toFixed(1)}% uploaded
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;