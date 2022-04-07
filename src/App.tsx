import React, {useState} from "react";
import './assets/scss/App.scss';
import RWDModal from "./elements/ModalPopup/RWDModal";
import Header from './elements/Header';
import Home from "./pages/Home";

const App = () => {

     // Login/Registration modal popup
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

    return (
        <div className="App">

            <Header />
            <Home />

            <button onClick={toggleModal}>Show Modal</button>
            <RWDModal header="Login" message="Please log in" isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>

        </div>
    )
}

export default App;
