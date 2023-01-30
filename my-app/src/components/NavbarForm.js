import React, { Component } from 'react'
import NavbarFormChild from "./NavbarFormChild"

class NavbarForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        })
        console.log(this)
    }
    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <NavbarFormChild isLoggedIn={this.state.isLoggedIn} 
                handleSignIn={this.handleSignIn}
                handleSignOut={this.handleSignOut}
                />
            </div>
        )
    }
}

export default NavbarForm