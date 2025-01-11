import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>About component body</h2>
            <User name={"Akash Gupta"} location={"Hyderabad"} contact={"123456789"} />
            <UserClass name={"Akash Gupta (Class)"} location={"Hyderabad"} contact={"123456789"} />
        </div>
    )
}

export default About;