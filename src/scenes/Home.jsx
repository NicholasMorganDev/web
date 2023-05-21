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
          <>
            <h2>Please Login to See Your Dashboard!</h2>
          </>
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
