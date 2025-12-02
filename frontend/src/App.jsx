import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/PageNotFound';
import AddNote from './components/AddNote';
import EditNotes from './components/EditNotes';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
      <Router>
        <Toaster position='top-right'/>  
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<LandingPage />} />     


    <Route path="/dashboard" element={
              <ProtectedRoute>
              <Dashboard />
              </ProtectedRoute> }/>  

        <Route path="*" element={<PageNotFound/>}/>  
        {/* <Route path="/addNote" element={<AddNote />} /> 
        <Route path="/editNote/:id" element={<EditNotes />} /> */}

<Route path="/addNote" element={ <ProtectedRoute><AddNote /> </ProtectedRoute>} />    
<Route path="/editNotes/:id" element={ <ProtectedRoute><EditNotes /></ProtectedRoute>} /> 
     </Routes>
    </Router>
  )
}
export default App
