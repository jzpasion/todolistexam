import { React } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Todolist = ({itemList,clickFunction}) =>{
    
    return(
        <ListGroup >
            {itemList.map((list , index) =>(
                list.status? <ListGroup.Item key={index} className='listItems'  onClick={()=>clickFunction(index)}>{list.taskName}</ListGroup.Item> 
                :<ListGroup.Item key={index} className='disabledItems' >{list.taskName}</ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default Todolist;