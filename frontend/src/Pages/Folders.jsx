import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar.jsx";
import { useEffect, useState } from "react";
import { Card, Text } from "@tremor/react";
import { Link } from "react-router-dom";

export default function Folders() {

    const url = import.meta.env.VITE_REACT_APP_API_URL;
    const token = useSelector((state) => state.auth.userToken);
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        if (token && url) {
            fetch(url + '/vault/folders', {
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
            .then(data => setFolders(data))
            .catch(error => console.error(error))
        }
    }, [token, url])
    
    return (
        <>
            <Navbar />
            <div>
                <h1 className="text-white">Folders</h1>
            </div>
            <div className="flex mx-10 justify-between">
                { folders.map((folder) => {
                    return (
                    <Link key={folder.id} to={`/folders/${folder.id}`}> 
                        <Card className="max-w-xs mx-auto" decoration="bottom" decorationColor="gray">
                            <Text>{folder.name}</Text>
                        </Card>
                    </Link>
                    )
                }) }

            </div>

        </>
    )
}