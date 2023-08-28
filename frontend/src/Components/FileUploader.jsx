import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FileUpload({ onFileUploaded }) {
    
  const [file, setFile] = useState('');
  const { id } = useParams();
  const url = import.meta.env.VITE_REACT_APP_API_URL;
  const token = useSelector((state) => state.auth.userToken);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);

      try {
          const response = await fetch(url + '/vault/folders/' + id, {
              method: 'POST',
              body: formData,
              headers: {
                  'auth-token': token
              }
          });

          if (response.ok) {
              onFileUploaded(); // <-- Llamar a onFileUploaded aquí
              setFile('')
          } else {
              console.error('Failed to upload file:', response.statusText);
          }
      } catch (error) {
          console.error('Error uploading file:', error);
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button type="submit">Upload</button>
      </form>
  )
}

export default FileUpload;
