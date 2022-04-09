import './assets/scss/App.scss';
import Header from './elements/Header';
import Home from "./pages/Home";

const App = () => {

    // Login/Registration modal popup

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

    return (
        <div className="App">

            <Header />
            <Home />

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

        </div>
    );
}

export default App;
