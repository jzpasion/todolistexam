import { useState} from "react";
import Todolist from "./pages/Todolist";
import './App.css';
import { ListGroup,Form,InputGroup } from "react-bootstrap";

const App=()=> {
  let itemListInitial = [ 
    {taskName: "Work" , status: true} , 
    {taskName: "Meeting" , status: true} , 
    {taskName: "Play Games" , status: true} ,
    {taskName: "Eat" , status: false} , 
    {taskName: "Sleep" , status: true} 
    ]

  let [itemList , setItemList] = useState (itemListInitial);
  let [result , setResult] = useState("");

  return (
    <div className='container'>
    <InputGroup>
      <Form.Control className="number-input" onChange={(e)=>{setResult(e.target.value)}} value={result} />
    </InputGroup>

    <ListGroup>
      <Todolist itemList={itemList}/>
    </ListGroup>
</div>
  );
}

export default App;
