import logo from './logo.svg';
import {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import './App.css';
import {auth} from "./firebase-config";

function App() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {

    };

    const logout = async () => {

    };

    return (
        <div className="App">
            <div>
                <h3> Register User </h3>
                <input placeholder="Email..."
                       onChange={(event) => {
                           setRegisterEmail(event.target.value);
                       }}
                />
                <input placeholder="Password..."
                       onChange={(event) => {
                           setRegisterPassword(event.target.value);
                       }}
                />

                <button onClick={register}> Create User</button>
            </div>
            <div>
                <h3> Login </h3>
                <input placeholder="Email..."
                       onChange={(event) => {
                           setLoginEmail(event.target.value);
                       }}
                />
                <input placeholder="Password..."
                       onChange={(event) => {
                           setLoginPassword(event.target.value);
                       }}
                />

                <button> Login</button>
            </div>
            <h4> User Logged In: </h4>
            <button> Sign Out</button>
        </div>
    );
}

export default App;
