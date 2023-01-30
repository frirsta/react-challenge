import React from "react";

function NavbarFormChild(props){
    return (
        <div>
            <h1>My Gallery</h1>
            {
                props.isLoggedIn ? (
                    <div>
                        <form>
                           
                            <label for="exampleInputUsername" class="form-label">Username</label>
                            <input type="email"  id="exampleInputUsername"></input>
 
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password"  id="exampleInputPassword1"></input>
 

                            <button type="submit">Submit</button>
                           
                            </form>
                        <button onClick={props.handleSignOut}>Sign out</button>
                    </div>
                ) : (

                    <button onClick={props.handleSignIn}>Sign in</button>
                )
            }
        </div>
    )
}

export default NavbarFormChild