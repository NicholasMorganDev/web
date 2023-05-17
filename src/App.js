import Footer from "./components/Footer.jsx"
import { useState } from 'react';
import './App.scss';
import BucketList from "./components/BucketList.jsx";
import Header from "./components/Input.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [ itemList, setItemList ] = useState();
  const [ loading, setLoading ] = useState(true);
  return (
    <>
      <Nav/>
          
      <div className="main-container">
        <div className="text">
          <h1>Bucket List 101</h1>
          <p>Peak Pursuits: Scaling Majestic Mountains</p>
        </div>
        <Header setLoading={setLoading} setItemList={setItemList}/>
        <BucketList loading={loading} itemList={itemList} setItemList={setItemList} setLoading={setLoading}/>
      </div>

      <Footer/>
    </>
  );
}

export default App;
