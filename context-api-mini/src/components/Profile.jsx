import { useContext } from "react"
import UserContext from "../context-providers/UserContext"


function Profile() {

    const {user} = useContext(UserContext)

    if(user){ 
        return(<div> Welcome, {user.username}</div>)
    }
    return(<div>Please Log in</div>)
}

export default Profile