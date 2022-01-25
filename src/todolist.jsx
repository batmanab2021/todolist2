import  {useState}  from "react"; 
import Todolist from "./todoitem";


const Todoitem = () => {
  
  const [todoitem, setTodoitem] = useState([]) 
  const [input, setInput] = useState("") 
 
 
  const onclick = () => {
    const newTodoitem = [...todoitem];   
    newTodoitem.push(onclick);        
    setTodoitem(newTodoitem);
    Todolist("")          
  }

 
  const ondelete = (i) => {
    const newTodoitem = [...todoitem];   
    newTodoitem.test(i, 1);   
    setTodoitem(newTodoitem);          
    setInput("");              
  }
 return (

    <div>
      <h1>Which item would you like to have?</h1>

      <div className="todoitem">
              <input onChange={(e) => setInput(e.target.value)}
              type="text" 
              id = "inputBox"
              value={input}
              className="todoitem-input"/>
              <button className="todo-button" onClick={ondelete}>selct the todoitem</button>
        </div>

    
      {todoitem.map((Todoitem, i) => {
       
        return(
          <div className="todo-items">
            <div key = {i} className = "todoitem-list">                     
              <h2>{todoitem}</h2>   
             <div className="list">
                  <todoitem onClick={() => ondelete(i)} className="delete-list" />
              </div> 
            </div>                                                                                                               
          </div>
       ) 
      })}
      
      </div>

    
  )};

export default Todoitem;