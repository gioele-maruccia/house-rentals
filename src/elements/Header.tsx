import React, {useEffect, useState} from 'react';
import {Logo} from './Logo';
import LoginModal, {LoginFunction} from "./ModalPopup/LoginModal";
import RegisterModal, {RegisterFunction} from "./ModalPopup/RegisterModal";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    User
} from "firebase/auth";
import {auth, provider} from "../firebase-config";
import {ProfileMenu} from './ProfileMenu';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Colors from '../assets/Colors';

const Wrapper = styled.div.attrs((props : { toTop : boolean }) => props)`
position: sticky;
left: 0;
top: 0;
display: flex;
padding: 3vh 8vw;
align-items: center;
transition: all .2s ease;
background-color: ${(props) => props.toTop ? 'black' : 'white' };
box-shadow: ${props => !props.toTop ? '2px 2px 9px 0px #0000000f' : '' };

.left {
    flex: 1;
    display: flex;
    align-items: flex-start;
}

> .center {
    flex: 6;
    color: ${props => props.toTop ? 'white' : 'black'};

    .nav-link {
        position: relative;

        &::after {
            transition: all .2s ease-out;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            content: ' ';
            position: absolute;
            top: 100%;
            left: 0;
            border-radius: 5px;
            background-color: ${Colors.colorPrimary};
            transform-origin: left;
        }

        &.active::after{
            transform: scaleX(.6);
        }
    }

    > * {
        margin: 0 15px;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        user-select: none;

        &:hover {
            opacity: 1;
        }

        &:not(.active) {
            opacity: .8;
        }
    }
}

.right {
    flex: 1;
}
`
type HeaderProps = {
}
const Header = () => {

    // Login/Registration modal popup
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
    const [loginError, setLoginError] = useState<string | undefined>();
    const [registerError, setRegisterError] = useState<string | undefined>();
    const [user, setUser] = useState<User | null>(null);
    const [toTop, setToTop] = useState(true)
     
    useEffect(() => {
        // Detect if the page is at the top to change header appearance
        document.addEventListener('scroll', event => {
            const scrolledToTop = window.scrollY === 0
            setToTop(scrolledToTop)
        })
    }, [])

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

    // GOOGLE LOGIN
    const onLoginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
        } catch (error: any) {
            console.log(error.message);
        }
    };


    const logout = async () => {
        await signOut(auth);
    };

    return (
        <Wrapper toTop={toTop}>

            <div className="left">
                <Logo type={toTop ? 'light' : 'dark' }/>
            </div>

            <div className="center">
                <NavLink to="/home"
                    className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
                <div>
                    <i className="fa-solid fa-magnifying-glass mr-5"></i>
                    <span>Search</span>
                </div>
                <NavLink to="/about-us"
                    className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>About us</NavLink>
                <NavLink to="/contact-us"
                    className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contact us</NavLink>
            </div>

            <div className="right">

                <ProfileMenu
                    type={toTop ? 'dark':'light'}
                    onCommand={a => {
                        switch (a) {
                            case 'login' :
                                toggleLoginModal();
                                break;
                            case 'signup' :
                                toggleRegisterModal();
                                break;
                            case 'logout':
                                logout();
                                break;
                        }
                    }}
                    user={user}/>

                <LoginModal loginError={loginError}
                            isModalVisible={isLoginModalVisible}
                            onClose={toggleLoginModal}
                            onLoginRequested={onLoginRequest}
                            onLoginWithGoogleRequested={onLoginWithGoogle}>
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