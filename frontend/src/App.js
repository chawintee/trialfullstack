import React,{useState} from 'react';
import './App.css';

function App() {

  const [inputText,setInputText] = useState("")
  const [list, setList] = useState([])
  const [idx, setIdx] = useState(0)

  const inputTextFn = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value)
    // console.log(inputText)
  }

  const addToList = (e) => {
    // console.log(e.key)
    if(e.key === "Enter" && inputText !== ""){
      const inputObj = {id: idx,task: inputText};
      setList([...list,inputObj]);
      setIdx(idx+1)
      console.log(list)
      setInputText("")
    }
  }
  


  return (
    <div className="App">
      <ul>
        {list.map(ele => <li key={ele.id}>{ele.task}</li>) }
      </ul>
      <input onChange={inputTextFn} value={inputText} onKeyPress={addToList}/>
      <button>Add</button>
    </div>
  );
}

export default App;
