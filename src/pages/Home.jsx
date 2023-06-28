import { useUserContext } from "../context/UserContext"
import {useNavigate} from "react-router-dom"

const Home = () => { 
    
    const {setUser} = useUserContext()
    const navigate = useNavigate()

    const handleLogin = ()=>{

        setUser({
            name:"Polo",
            email:"polo@gsds.com"
        })
        navigate("/dashboard")
    }
    
    return(
        <>

            <h1>home</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
 }



 export default Home