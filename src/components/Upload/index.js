import React from 'react'
import axios from "axios";
import { useState } from "react";

function Upload() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile || isUploading) {
      return;
    }

    setIsUploading(true);
    setUploadStatus("");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "https://d73a-2804-14c-88-22bf-ddce-b78a-deca-5eed.ngrok-free.app/upload",
        formData
      );

      console.log(response.status)

      if (response.status === 200) {
        setUploadStatus("success");
      } else {
        setUploadStatus(`Error: ${response.data}`);
      }
    } catch (error) {
      setUploadStatus(`Error: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!selectedFile || isUploading}>
          {isUploading ? "Uploading..." : "Upload"}
        </button>
        {uploadStatus === "success" ? (
          <p>File uploaded successfully!</p>
        ) : uploadStatus === "error" ? (
          <p>Failed to upload file. Please try again.</p>
        ) : null}
    </div>
  )
}

export default Upload;