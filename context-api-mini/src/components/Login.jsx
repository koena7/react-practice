import { useContext, useState } from "react"
import UserContext from "../context-providers/UserContext";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {user, setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("logging== {} {}",username, password)
        setUser({username, password})
        console.log("logging== {}",user)
    }

    return(
        <div>
            <p>login page</p>
            <input 
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            {" "}
            <input 
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login