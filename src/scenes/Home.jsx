import { useState } from "react";
import BucketList from "../components/BucketList";
import Search from "../components/Input.jsx";


export default function Home({
  loading,
  itemList,
  setLoading,
  setItemList,
  user,
  setUser,
}) 
{

const [ message, setMessage ] = useState(false);



  return (
    <>
      <div className="main-container">
        <div className="text">
          <h1>Bucket List 101</h1>
          
          {/* {(BucketList) 
            ? () => setMessage(true)
            : null } */}

          {/* {(user)
            ? (!message)
                ? <p>"The sooner you write down your ideas the sooner you will achieve your goals"</p>
                : <p> ✅ : Deletes an Item</p>
            : null
          } */}
          
          <p>"The sooner you write down your ideas the sooner you will achieve your goals"</p>
          <br/>
          <p> ✅ : Deletes an Item</p>

        </div>

        {!user ? (
          <div className="welcome-m">
            <p>Welcome! If you have been searching for a place to organize your thoughts, goals and future adventure destinations, then look no further. Here we offer everything you might want in order to get started. Make your dreams a reality one line at a time! </p>
            <h2>Please Login to See Your Dashboard!</h2>
          </div>
        ) : (
          <>
            <Search setLoading={setLoading} setItemList={setItemList} />
            <BucketList
              loading={loading}
              itemList={itemList}
              setItemList={setItemList}
              setLoading={setLoading}
            />
          </>
        )}
      </div>
    </>
  );
}
