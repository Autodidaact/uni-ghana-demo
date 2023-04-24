import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Home from './components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [universities, setUniversities] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if(r.ok){
          r.json().then(
           (currentUser) => {
             setUser(currentUser)
           }
          );
         }
       });
       
     fetch("/universities")
      .then((r) => {
        if(r.ok){
          r.json().then(
           (data) => {
             setUniversities(data)
           }
          );
         }
       });
    
    }, []);
    

  return (
    <Router>
      <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/" element={<Home universities={universities}/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/sign-up" element={<SignUp setUser={setUser}/>} />
        </Routes>
      </div>
    </Router>
  )
}
export default App