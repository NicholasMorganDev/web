import { useRef, useState } from "react";
import { Input } from "antd";

export default function Header ({setItemList, setLoading}) { //change name
  const [element, setElement] = useState("")
  const formRef = useRef(null)
  const handleAdd = async (value) => {
    if(value.length < 3) return
    
    setLoading(true)

    const uid = localStorage.getItem("uid")

    const newItem = {
      done: false,
      userId: uid,
      name: value,
    }
    const response = await fetch(`https://bucket-list-api-nm.web.app/bucket/${uid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    })
    const data = await response.json()
    setItemList(data.filter(item => !item.done))
    setLoading(false)
    setElement("")
    //reset value to blank
  }
  return (
    <header>  
      <Input.Search
      placeholder="Add New Item Here!"
      allowClear
      enterButton="Add"
      value={element}
      onChange={e => setElement(e.target.value)}
      ref={formRef}
      size="large"
      onSearch={handleAdd}
      />
    </header>
  )
}