import { useState } from "react";
import { Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./register.css";

const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const signUp = async () => {
        const payload = { user: { username: username, mail: email } };

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",    
                body: JSON.stringify(payload),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            const user = await response.json();

            if (user && response.status === 201) {
                console.log("redirect");
                navigate("/home");
            }
        } catch(er) {
            console.log(er);
        }
    }

    return <div className="Signup">
        <Input type="text" value={username} onChange={e => setUserName(e.target.value)}/>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <Button color="primary" onClick={signUp}>Sign Up</Button>
    </div>
};

export default Register;
