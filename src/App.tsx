import {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, User} from "firebase/auth";
import {auth} from "./firebase-config";
import './assets/scss/App.scss';
import Header from './elements/Header';
import Home from "./pages/Home";
import LoginModal, {LoginFunction} from "./elements/ModalPopup/LoginModal";

const App = () => {

    // Login/Registration modal popup
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loginError, setLoginError] = useState<string | undefined>();
    const [user, setUser] = useState<User | null>(null);

    const toggleModal = () => {
        setIsModalVisible(isModalVisible => !isModalVisible)
        setLoginError("");
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    // NON CANCELLARE
    /*
       const [registerEmail, setRegisterEmail] = useState("");
       const [registerPassword, setRegisterPassword] = useState("");

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


*/


    const onLoginRequest: LoginFunction = async ({loginPassword, loginEmail}) => {
        try {
            setLoginError("");
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error: any) {
            console.log(error.message);
            setLoginError(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="App">

            <Header />
            <Home />

            <button onClick={toggleModal}>LOGIN</button>
            <LoginModal loginError={loginError}
                        isModalVisible={isModalVisible}
                        onClose={toggleModal}
                        onLoginRequested={onLoginRequest}>
            </LoginModal>

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

            */}
            <h4> User Logged In: </h4>
            {user?.email}
            <button onClick={logout}> Sign Out</button>
        </div>
    );
}

export default App;
