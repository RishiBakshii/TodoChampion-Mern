import { useEffect, useState } from "react";
import './css/home/Home.css'
import './css/home/responsive.css'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function Home() {



  const navigate=useNavigate()

  const BASE_URL = "http://localhost:5000";

  const [popupModal, setpopupModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoInput,SetTodoInput]=useState("")
  const [loggedInUser,SetLoggedInUser]=useState({
    id:"",
    name:""
  })



  const getUserDetails=async()=>{
    const response=await fetch(`${BASE_URL}/api/getDetails`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        "authToken":localStorage.getItem("authToken")
      })
    })

    const user=await response.json()
    setTodos(user.todos)
    SetLoggedInUser(user)
  }

  useEffect(() => {

    localStorage.getItem("authToken")?(

      getUserDetails()
    
    ):(navigate("/login"))

  }, []);


  const addTodo=async(e)=>{
    e.preventDefault();
    const response=await fetch(`${BASE_URL}/api/addTodo`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:loggedInUser._id,
        text:todoInput
      })
    })

    const createdTodo=await response.json()

    SetTodoInput('')
    setpopupModal(false)
    setTodos([...todos,createdTodo])
  }

  const toggleCompleteTodo=async(e,userid,todoid)=>{

    e.stopPropagation();

    const response=await fetch(`${BASE_URL}/api/toggleComplete/${userid}/${todoid}`,{
      method:"PUT"
    })

    const updatedTodo=await response.json()

    setTodos(()=>todos.map((todo)=>{
      if(todo._id===updatedTodo._id){
        todo.completed=updatedTodo.completed
      }
      return todo
    }))

  }

  const handleTodoDelete=async(e,userid,todoid)=>{
    e.stopPropagation();

    const response=await fetch(`${BASE_URL}/api/deleteTodo/${userid}/${todoid}`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      }
    })

    const deletedTodo=await response.json()
    
    setTodos(()=>todos.filter((ele)=>{
      return ele._id!==deletedTodo._id
    }))

  }

  const handleLogout=()=>{
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <div className="container">
        <div className="todo-container">
                  {todos.length=== 0 ? (
          <h1>Hey {loggedInUser.name}, You have no Todos!🥲<br /></h1>
        ) : (

          todos.map((todo) => {
            return (
              <div key={todo._id} className={`todos`} onClick={(e)=>toggleCompleteTodo(e,loggedInUser._id,todo._id)}>
                <p className={`todo-text ${todo.completed?"completed":""}`}>{todo.text}</p>
                <div className="action-container">
                  <p onClick={(e)=>handleTodoDelete(e,loggedInUser._id,todo._id)}>❌</p>
                </div>
              </div>
            );
          })
        )}
        </div>


        <div className="addTodo" onClick={() => setpopupModal(true)}>
          <p>+</p>
        </div>

        {popupModal ? (
          <div className="popupModal">
            <p className="crossIcon" onClick={() => setpopupModal(false)}>
              ✖️
            </p>

            <div className="content">
              <h4>Make a Todo</h4>
              <form onSubmit={(e)=>addTodo(e)}>
              <input required type="text" placeholder="Write a Todo here..."  value={todoInput} onChange={(e)=>{SetTodoInput(e.target.value)}}/>
              <button >Add Task</button>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
