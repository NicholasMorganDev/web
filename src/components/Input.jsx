import { Input } from "antd";

export default function Header ({setItemList, setLoading}) { //change name
  const handleAdd = async (value) => {
    if(value.length < 3) return
    
    setLoading(true)

    const newItem = {
      done: false,
      userId: 'me',
      name: value,
    }
    const response = await fetch('https://bucket-list-api-nm.web.app/bucket', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    })
    const data = await response.json()
    setItemList(data.filter(item => !item.done))
    setLoading(false)
    //reset value = ''
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