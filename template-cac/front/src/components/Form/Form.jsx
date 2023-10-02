import { useState } from "react";
import validation from "./validation";




const Form = () => {
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState();
    const handleChange = (e) => {
        setErrors(validation({...userData, [e.target.name] : e.target.value}))
        setUserData({...userData, [e.target.name] : e.target.value});
        

    };

    return (
        <div>
            <form>
                <div>
                <label htmlFor="">Email</label>
                <input 
                name="email" 
                type="text" 
                value={userData.email} 
                onChange={handleChange} />

                </div>
          

                <div>
                <label htmlFor="">Password</label>
                <input 
                name="password" 
                type="text" 
                value={userData.password} 
                onChange={handleChange} />
                </div>

                <button>Submit</button>

            </form>
        </div>
        
    )
}

export default Form;
