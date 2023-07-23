import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Helpers
import PrivateRoute from './Helpers/PrivateRoute';

//Pages
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Folders from './Pages/Folders';
import Notes from './Pages/Notes';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/folders" element={<PrivateRoute><Folders/></PrivateRoute>}/>
          <Route path="/notes" element={<PrivateRoute><Notes/></PrivateRoute>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
  );
}