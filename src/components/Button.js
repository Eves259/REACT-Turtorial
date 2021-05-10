import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) /*Destructured object from 'props'*/ => {
    return <button onClick={onClick} style = {{backgroundColor: color}} className = "btn">{text}{/* adds the props */}</button>//retuns the button
}

Button.defaultProps = {
    color: "steelBlue"
}

Button.propTypes = {
    text: PropTypes.string, //string is used to set the prop as a string
    color: PropTypes.string,
    onClick: PropTypes.func,//func is used to set the prop as a function
}

export default Button
