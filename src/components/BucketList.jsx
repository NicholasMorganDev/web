import { List } from "antd";
import { useEffect } from "react";

export default function BucketList ({ loading, itemList, setItemList, setLoading }) {
  
  useEffect(() => {
    const uid = localStorage.getItem("uid")
    fetch(`https://bucket-list-api-nm.web.app/bucket/${uid}`)
      .then(resp => resp.json())
      .then(data => setItemList(data.filter(item => !item.done)))
      .catch(alert) //improve (modal?)
      .finally(() => setLoading(false))
  }, [])

  const handleUpdate = (itemId) => {
    const uid = localStorage.getItem("uid")
    fetch(`https://bucket-list-api-nm.web.app/bucket/${uid}/${itemId}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({done: true})
    })
      .then(resp => resp.json())
      .then(data => setItemList(data.filter(item => !item.done)))
      .catch(alert)
  }
  
  return (
    <form>
      <List 
      bordered
      dataSource={itemList}
      loading={loading}
      size="large"
      renderItem={(task) => (
        <List.Item className={(task.done) && 'done'} 
        actions = {[
          <a className = "actions" onClick={() => handleUpdate(task.id)}>✅</a>,
          //<a onClick={() => handleEdit(task.id)}>🖋️</a>
        ]}>
          {task.name}
        </List.Item>
      )}
      />
    </form>
  )
}
