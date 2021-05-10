/*impt imports prop types-import PropTypes from 'prop-types' 
Header.propTypes = { //Sets the proptype to a string so if any numbers are put in it will error. It helps with catching errors fast and making the code more exact.
    title: PropTypes.string, //.isRequired can be added to ensure the value doesn't change to what it shouldn't be
}*/
//rafce using the extension to make this

//wrap components in curly braces to add conditions

import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({ title, onAdd, showAdd }) => { //onAdd is passed into Header as a prop
    const location = useLocation()

    return (
        <header className = "header">
            <h1 /*style = {headingStyle}*/>{title}</h1>
            {/* The text is dynamic so now if the save task part is showing then the text will say close and if it isn't then it will say Add. This works the same for the color. Red for close and green for add */}
            {location.pathname === "/" &&  (<Button color = {showAdd ? "red" : "green"} text = {showAdd ? "Close" : "Add"} onClick={onAdd} />)} {/* When the Add button is clicked the save task part of the form appears and if it is clicked again it goes away */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

/* Variable example
const headingStyle = {
    color: 'red',
    backgroundColor: 'blue'
}
*/

export default Header