import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link> {/* Link is used instead of an a tag so the page doesn't reload */}
        </footer>
    )
}

export default Footer
