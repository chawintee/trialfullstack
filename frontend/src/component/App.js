import React,{useState, useEffect} from 'react';
import './App.css';
import axios from "../config/axios";

function App() {

  const [inputText,setInputText] = useState("")
  const [list, setList] = useState([])
  const [idx, setIdx] = useState(0)

  const inputTextFn = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value)
    // console.log(inputText)
  }

  //SHOW(GET)

  const fetchData = async () => {
    const result = await axios.get("/t");
    setList(result.data);
    console.log(list);
    
  }

  //use effect

  useEffect(()=> {
    fetchData()
  },[]);



  //ADD(CREATE)

  const addToList = async (e) => {
    // console.log(e.key)
    if(e.key === "Enter" && inputText !== ""){
      // const inputObj = {id: idx,task: inputText};
            const body = {
              task: inputText,
            }
            await axios.post("/t",body);
      // setList([...list,inputObj]);
      fetchData();
      setIdx(idx+1);
      console.log(list);
      setInputText("");
    }
  }
  

  //Edit (UPDATE)

  
  const onClickToShowInput = async (targetId,editStatus) => {
    // console.log(targetId)
    // console.log(editStatus)
    const body = {
      edit_status: !editStatus,
    }
    await axios.put(`/t/${targetId}`,body);
    fetchData();
  };



















  // DELETE (DELETE)

  const onDeleteList = async (targetId) => {
    
    console.log(targetId)
    await axios.delete(`/t/${targetId}`);
    fetchData();

  }











  return (
    <div className="App">
      <ul>
  {list.map(ele => 
  <li key={ele.id}>{ele.task}  {ele.post_code} 
  <img src={ele.profile_picture} style={{width:"20px" , height:"20px" } }/> 
  <button onClick={()=>onDeleteList(ele.id)} >Del</button>
  {ele.edit_status ? <input /> : <button onClick={()=>onClickToShowInput(ele.id,ele.edit_status)} >Edit</button>}
  </li>) }
      </ul>
      <input onChange={inputTextFn} value={inputText} onKeyPress={addToList}/>
      <button>Add</button>
    </div>
  );
}

export default App;
