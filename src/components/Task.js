import { FaTimes } from "react-icons/fa" //using icons as components. Importing from a library named fontawesomes

const Task = ({ task, onDelete, onToggle }) => { //passing in task and Ondelete as a prop
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}` /* If task.reminder is true then it will have the class of reminder, else it is false it will have nothing */} 
            onDoubleClick={() => onToggle(task.id)}> {/* Calls the function and gets the ID */}
            <h3>{task.text} {' '}
            <FaTimes style={{ color: "red", cursor: "pointer" }} 
            onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task