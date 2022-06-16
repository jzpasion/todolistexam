import { useState} from "react";
import Todolist from "./pages/Todolist";
import './App.css';
import { ListGroup,Form,InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";

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

  const onItemClick =(index)=>{
    //Add new task
      let tempList = [...itemList];
      tempList[index].status = false;
      setItemList(tempList);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: tempList[index].taskName+ ' Task Done!',
        showConfirmButton: false,
        timer: 1500
      })
   
  }

  const onEnter =(e)=>{
    if (e.key === 'Enter') {
      //check if input is not null
      if(e.target.value !== " " || e.target.value !== ""){
        let checkList = [...itemList];
        var checker = checkList.find(element =>(
          element.taskName.toLocaleLowerCase() === e.target.value.toLocaleLowerCase().trim()
          
        ))
        if(checker === undefined){
          let templist = [{taskName: e.target.value , status: true } , ...itemList]
          setItemList(templist);
          setResult("");
        }else{
          alert("Task name is already on the list!");
          setResult("");
        }
      }
    }
  }

  return (
    <div className='container'>
    <InputGroup>
      <Form.Control className="number-input" onKeyDown={onEnter} onChange={(e)=>{setResult(e.target.value)}} value={result} />
    </InputGroup>

    <ListGroup>
      <Todolist itemList={itemList} clickFunction={onItemClick}/>
    </ListGroup>
</div>
  );
}

export default App;
