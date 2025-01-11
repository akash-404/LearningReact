import React from "react";

class UserClass extends React.Component {

    constructor(props){
        console.log("Constructor called");
        super(props);
        console.log("Props---",this.props);
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "...",
                location: "... , ..."
            }
        };
    }

    async componentDidMount(){
        console.log("Constructor called");
        const data = await fetch("https://api.github.com/users/akash-404");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log("Github api user data---", json);
    }
    
    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component unmounted");
    }

    render(){
        console.log("Render called");

        // const {name, location, contact} = this.props;
        const {name, location, avatar_url: photo} = this.state.userInfo;
        const {count, count2} = this.state;

        return(
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button className="count-increase" onClick={()=> {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                    })
                }}>Count ++</button>
                <h1>Count2: {count2}</h1>
                <img src={photo} alt="user-photo" className="photo"/>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>

            </div>
        )
    }
}

export default UserClass;