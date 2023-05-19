import BucketList from "../components/BucketList";
import Header from "../components/Input";

export default function Home ({loading, itemList, setLoading, setItemList, user, setUser}) {

  return (
    <>


        <div className="main-container">
          <div className="text">
            <h1>Bucket List 101</h1>
            <p>Japan Japan Japan</p>
          </div>

      {(user)
          ? <>
              <h2> Logged In </h2>
              <button onClick={() => {setUser(false); localStorage.setItem('token','') }}>Log Out</button>
            </>
          : null
        }

          <Header setLoading={setLoading} setItemList={setItemList}/>
          <BucketList loading={loading} itemList={itemList} setItemList={setItemList} setLoading={setLoading}/>
        </div>
    </>
  )
}