import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/">Go Back</Link> {/* Link is used instead of an a tag so the page doesn't reload */}
        </div>
    )
}

export default About
