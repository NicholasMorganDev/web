import Footer from "./components/Footer.jsx"
import { useEffect, useState } from 'react';
import './App.scss';
import Nav from "./components/Nav.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/Home.jsx";
import Login from "./components/LoginForm.jsx";

function App() {
  const [ itemList, setItemList ] = useState();
  const [ loading, setLoading ] = useState(true);
  const [ user, setUser ] = useState(false)

  useEffect(() => {
    const uid = localStorage.getItem('uid')
    if (uid) {
      setUser(true)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav/>

        <Routes>
          <Route path="/" element={<Home setLoading={setLoading} setItemList={setItemList} loading={loading} itemList={itemList} user={user} setUser={setUser}/>}/>
          <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
