/*impt imports prop types-import PropTypes from 'prop-types' 
Header.propTypes = { //Sets the proptype to a string so if any numbers are put in it will error. It helps with catching errors fast and making the code more exact.
    title: PropTypes.string, //.isRequired can be added to ensure the value doesn't change to what it shouldn't be
}*/
//rafce using the extension to make this

import Button from "./Button"

const Header = ({ title }) => {
    return (
        <header className = "header">
            <h1 /*style = {headingStyle}*/>{title}</h1>
            <Button color = "green" text = "Hello"/>
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