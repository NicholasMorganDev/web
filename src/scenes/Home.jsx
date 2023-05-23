import BucketList from "../components/BucketList";
import Header from "../components/Input";
import { List } from "antd";

export default function Home({
  loading,
  itemList,
  setLoading,
  setItemList,
  user,
  setUser,
}) {
  return (
    <>
      <div className="main-container">
        <div className="text">
          <h1>Bucket List 101</h1>
          
          {(user)
            ? (List < 1)
                ? <p>"The sooner you write down your ideas the sooner you will achieve your goals"</p>
                : <p> ✅ : Deletes an Item</p>
            : null
          }
          
        </div>

        {!user ? (
          <div className="welcome-m">
            <p>Welcome! If you have been searching for a place to organize your thoughts, goals and future adventure destinations, then look no further. Here we offer everything you might want in order to get started. Make your dreams a reality one line at a time! </p>
            <h2>Please Login to See Your Dashboard!</h2>
          </div>
        ) : (
          <>
            <Header setLoading={setLoading} setItemList={setItemList} />
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
