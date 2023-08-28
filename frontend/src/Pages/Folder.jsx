import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FileUploader from "../Components/FileUploader";


export default function Folder() {
    const { id } = useParams();
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    const token = useSelector((state) => state.auth.userToken);
    const [files, setFiles] = useState([]);

    const fetchFiles = () => {
        fetch(url + '/vault/folders/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then(data => setFiles(data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        if (id && url && token) {
            fetchFiles();
        }
    }, [id, url, token])

    const handleFileUploaded = () => {
        fetchFiles();
    }

    return (
        <>
            <Navbar />
            <div className="text-white">
                    <h1>Folder {id}</h1>
                </div>
                <div className="flex justify-between">
                    {
                        files.map((file) => {
                            return (
                                <div className="text-white" key={file._id}>
                                    <p>{file.filename}</p>
                                </div>
                            )
                        })
                    }
                </div>    
                
            <FileUploader onFileUploaded={handleFileUploaded} />    
        </>
    )

}