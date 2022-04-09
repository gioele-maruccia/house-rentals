import React, {useState} from 'react';
import {Logo} from './Logo';
import LoginModal, {LoginFunction} from "./ModalPopup/LoginModal";
import RegisterModal, {RegisterFunction} from "./ModalPopup/RegisterModal";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User
} from "firebase/auth";
import {auth} from "../firebase-config";
import { ProfileMenu } from './ProfileMenu';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
padding: 3vh 8vw;
align-items: center;
position: relative;

.left {
    flex: 1;
    display: flex;
    align-items: flex-start;
}

> .center {
    flex: 6;

    > * {
        margin: 0 15px;
        display: inline-block;
        cursor: pointer;

        opacity: .8;

        &:hover {
            opacity: 1;
        }
    }
}

.right {
    flex: 1;
}
`
function Header() {

    // Login/Registration modal popup
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
    const [loginError, setLoginError] = useState<string | undefined>();
    const [registerError, setRegisterError] = useState<string | undefined>();
    const [user, setUser] = useState<User | null>(null);

    const toggleLoginModal = () => {
        setIsLoginModalVisible(isLoginModalVisible => !isLoginModalVisible)
        setLoginError("");
    }

    const toggleRegisterModal = () => {
        setIsRegisterModalVisible(isRegisterModalVisible => !isRegisterModalVisible)
        setRegisterError("");
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

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
            setLoginError(error.message);
        }
    };

    const onRegisterRequest: RegisterFunction = async ({registerPassword, registerEmail}) => {
        try {
            setRegisterError("");
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error: any) {
            setRegisterError(error.message);
        }
    };


    const logout = async () => {
        await signOut(auth);
    };


    return (
        <Wrapper>

            <div className="left">
                <Logo/>
            </div>

            <div className="center">
                <span className="bold">Home</span>
                <div>
                    <i className="fa-solid fa-magnifying-glass mr-5"></i>
                    <span className="bold">Search</span>
                </div>
                <span className="bold">About us</span>
                <span className="bold">Contact us</span>
            </div>


            <div className="right">

                <ProfileMenu
                    onCommand={a => {
                        switch (a) {
                            case 'login' : toggleLoginModal(); break;
                            case 'signup' : toggleRegisterModal(); break;
                        }
                    }} />

                    <LoginModal loginError={loginError}
                                isModalVisible={isLoginModalVisible}
                                onClose={toggleLoginModal}
                                onLoginRequested={onLoginRequest}>
                    </LoginModal>

                    <RegisterModal registerError={registerError}
                                   isModalVisible={isRegisterModalVisible}
                                   onClose={toggleRegisterModal}
                                   onRegisterRequested={onRegisterRequest}>
                    </RegisterModal>

                    {/* <h4> User Logged In: </h4>
                    {user?.email}
                    <button onClick={logout}> Sign Out</button> */}
                   

            </div>

        </Wrapper>
    )
}

export default Header