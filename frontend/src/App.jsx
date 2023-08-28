import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Helpers
import PrivateRoute from './Helpers/PrivateRoute';
import Logout from './Helpers/Logout';

//Pages
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Folders from './Pages/Folders';
import Notes from './Pages/Notes';
import Folder from './Pages/Folder';

//Components

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/notes" element={<PrivateRoute><Notes/></PrivateRoute>}/>
          <Route path="/folders" element={<PrivateRoute><Folders/></PrivateRoute>}/>
          <Route path="/folders/:id" element={<PrivateRoute><Folder/></PrivateRoute>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
  );
}