import {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase-config";
import "./styles.css";
import './App.css';
import RWDModal from "./ModalPopup/RWDModal";
import Home from './Home';
import Header from './Header';

function App() {

     // Login/Registration modal popup
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

        /*
           const [registerEmail, setRegisterEmail] = useState("");
           const [registerPassword, setRegisterPassword] = useState("");
           const [loginEmail, setLoginEmail] = useState("");
           const [loginPassword, setLoginPassword] = useState("");

           const [user, setUser] = useState({});

           onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
           });


           const register = async () => {
               try {
                   const user = await createUserWithEmailAndPassword(
                       auth,
                       registerEmail,
                       registerPassword
                   );
                   console.log(user);
               } catch (error) {
                   console.log(error.message);
               }
           };

           const login = async () => {
               try {
                   const user = await signInWithEmailAndPassword(
                       auth,
                       loginEmail,
                       loginPassword
                   );
                   console.log(user);
               } catch (error) {
                   console.log(error.message);
               }
           };

           const logout = async () => {
               await signOut(auth);
           };*/

    return (
        <div className="App">

            <Header />
            <Home />

            <button onClick={toggleModal}>Show Modal</button>
            <RWDModal header="Login" message="Please log in" isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
{/*            <div>
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

                <button onClick={login}> Login</button>
            </div>
            <h4> User Logged In: </h4>
            {user?.email}
            <button onClick={logout}> Sign Out</button>*/}
        </div>
    );
}

export default App;
