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
      <h1>Bucket List 101</h1>
      
      <Header setLoading={setLoading} setItemList={setItemList}/>
      <BucketList loading={loading} itemList={itemList} setItemList={setItemList} setLoading={setLoading}/>

      <Footer/>
    </>
  );
}

export default App;
