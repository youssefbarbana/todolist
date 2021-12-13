import {useState} from 'react'
import { ADD_TASK } from './js/action types/Todotypes';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import './App.css'
import { addtask ,deletetask ,donetask} from './js/action types/actions/Todoaction';
function App() {
  const [text, settext] = useState()
  const dispatch = useDispatch()
  const initlist = useSelector(state => state.initlist)
  return (
    <div>
    <div className="App">
      <input onChange={(e)=>{settext(e.target.value)}}/>
      <button onClick={()=>dispatch(addtask({text:text,id:Math.random(),isDone:false}))}>add</button>
    </div>
    {initlist.map(el=><div><h1 onClick={()=>dispatch(donetask(el.id))} className={el.isDone?"decored":null}>{el.text}</h1><button onClick={()=>dispatch(deletetask(el.id))}>delete</button></div>)}
    </div>
  );
}

export default App;
