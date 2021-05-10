import { useState, useEffect } from 'react' //states are imported directly from react. //states are one way data. useEffect is often used to get something to happen when the page loads
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './components/Header' //Imports the Header JS to the root
import Tasks from "./components/Tasks" //Imports the Tasks JS to the root
import AddTask from "./components/AddTask" //Imports the AddTask JS to the root
import Footer from "./components/Footer" //Imports the Footer JS to the root
import About from "./components/About" //Imports the About JS to the root

/* import React from './components/Header' Class component example */

function App() {
  //const name = "Brad"; Place variables outside of the return
  const [showAddTask, setShowAddTask] = useState(false) //Its default is false. This hides the save task part of the form by default until it is needed
  const [tasks, setTasks] = useState ([]) //This is now an empty array and what was previously in here was moved to db.json

  useEffect(() => {
      const getTasks = async () => { //calling fetch tasks which returns a promise
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer) //adds it to the state
    }

    getTasks()
  }, []) //dependency array being passed in

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks') /* res means response. fetch returns a promise */
    const data = await res.json() //gives us the JSON data
    return data
  }

    //Fetch Task
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`) /* res means response. fetch returns a promise */
      const data = await res.json() //gives us the JSON data
      return data
    }


  //Add Task
  const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', { //fetch('http://localhost:5000/tasks') specifies the route
    method: "POST", //The method is a post request
    headers: { //We are adding data so headers are needed to specify the content type
      "Content-type": "application/json"
    },
    body: JSON.stringify(task) //sending the task that is passed in and the object is stringified. The data being sent is wrapped in JSON.stringify 
  })

  const data = await res.json() //The data returned is the new task that gets added. It is a promise so it needs to be awaited

  setTasks([...tasks, data]) //setTasks affects the entire array. data is the new task that was created

    /* const id = Math.floor(Math.random()*10000 + 1); //Ids are equal to random numbers between 1 and 10001

    const newTask = {id, ...task} //This object has the random ID and the Task, Day, and Reminder that is passed into the addTask function
    setTasks([...tasks, newTask]) //copies the current tasks that are already there and adds the new task on to it */
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE" //specifies the method as a delete request. The second argument is an object
    })

    setTasks(tasks.filter(task => task.id !== id)) //for each task it filters anc checks to see if a task's id is equal to the id
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id) //getting the task
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder} //creating the new task and putting it in a variable

    const res = await fetch (`http://localhost:5000/tasks/${id}`, {
      method: "PUT", //specifies the method as a put request because it is an update
      headers: { //sending data so headers are needed
        "Content-type": "application/json"
      },
      body: JSON.stringify(updTask) //the data we are sending
    }) //updating 

    const data = await res.json( )

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} /* spread across all of the task values and properties but change the reminder to the opposite of whatever it currently is when it is double clicked */ : task)) /* If the task ID in the current iteration is equal to the ID that is passed in then we will have a secific object, else it will just show the task  */
  }

  return ( <Router>
    <div className="container"> {/* Changes the classname. As long as there is one parent element it will work. It can even be in empty tags. <> </> */}
      
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />{/* Adds the Header to the page. onAdd is a prop and when it sets off it calls setShowAddTask. It gets set to the opposite of whatever it is when the function triggers. The value of showAddTask is also passed in*/}

  {/* <h2>Hello {'90' + 9}</h2> Use curly braces to use variables inside of the tags. Or you can add numbers. You can also add conditionals*/}
    <Route path="/" exact render={(props) => ( //This is used to separate the components visible to different pages. So the about page only has about components and the home page only has home page components

      <>
      {showAddTask && <AddTask onAdd={addTask} />} {/* If showAddTask is true then show that component. && is a shorter way of doing ternary without else */}
      {/* If tasks.length is greater than 0 then(?) show tasks, else(:) show "No Tasks to show"  */}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No Tasks To Show")} {/* state gets passed down and actions get passed up. The delte function gets passed up */}
      </>

    )} />
    <Route path="/about" component={About} />
    <Footer />
    </div>
    </Router> //To use the router everything in the output has to be wrapped or nested in Router
  );
}

/* Class component Example
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
*/

/* Each component will get it's own state */

/*
Name: Ethan Vesely
Date: 5-9-2021
Musician: EDEN
West-MEC Northeast Campus
*/

export default App;
