//racfe with the extension

import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => { //passing in tasks and onDelete
    return (
        <>
        {tasks.map((task) => //looping through each task
        (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /* outputting a component and passing in each task as a prop */ />)
        )}  
        </>
    )
}

export default Tasks