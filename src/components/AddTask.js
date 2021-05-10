import { useState } from 'react'

const AddTask = ({onAdd}) => { //Each state is an input. When text is typed the state updates with the text being typed
    const [text, setText] = useState('') //setText is used to update the state. The default is inside the useState() and it is nothing
    const [day, setDay] = useState('') //setDay is used to update the state. The default is inside the useState() and it is nothing
    const [reminder, setReminder] = useState(false) //setReminder is used to update the state. The default is inside the useState() and it is false

    const onSubmit = (e) => { //It takes in the event object and tests when the the form is submitted. If is is submitted it will prevent the page from reloading so it can preform a different function
        e.preventDefault()

        if(!text) {
            alert("Please Add a Task") //Testing if text is in when submitting
            return //It will return and if it has text then it will continue on
        }

        onAdd({ text, day, reminder }) //This will save the information entered

        setText("") //This will clear the form afterwards so another task can be added
        setDay("") //This will clear the form afterwards so another task can be added
        setReminder(false) //This will clear the form afterwards so another reminder can be set
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text}/* text from the state */ onChange={(e) => setText(e.target.value)/* this is whatever gets typed in */}/> {/* onChange is a controlled component. It has a function with the event object being passed into it */}
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day}/* text from the state */ onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder}/* text from the state */ onChange={(e) => setReminder(e.currentTarget.checked)} /* Checks to see if the box is selected and gives a true or false value */ />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
