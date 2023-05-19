import { Input } from "antd";

export default function Header ({setItemList, setLoading}) { //change name
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
    console.log(response)
    const data = await response.json()
    setItemList(data.filter(item => !item.done))
    setLoading(false)
    console.log(data)
    //value = ""
    //reset value to blank
    //accepts true values
  }
  return (
    <header>  
      <Input.Search
      placeholder="Add New Item Here!"
      allowClear
      enterButton="Add"
      size="large"
      onSearch={handleAdd}
      />
    </header>
  )
}