import React from 'react';
import RWDModal from "./RWDModal";
//import {ReactComponent as LoginIcon} from '../../assets/images/person_black_24dp.svg';
//import {ReactComponent as PasswordIcon} from '../../assets/images/lock_black_24dp.svg';

interface LoginArgs {
    password: string;
    login: string;
}

export type LoginFunction = (args: LoginArgs) => Promise<void>;

interface LoginModalProps {
    onBackdropClick: () => void;
    isModalVisible: boolean;
    loginError?: string;
    onLoginRequested: LoginFunction;
}

const LoginModal: React.FC<LoginModalProps> = ({onBackdropClick, isModalVisible, loginError, onLoginRequested}) => {
    return (<RWDModal
        onBackdropClick={onBackdropClick}
        isModalVisible={isModalVisible}
        header="Login"
        message="please log in"
        content={
            <>
                <input/>
                <input/>
                <button>Cancel</button>
                <button>Log In</button>
            </>
        }/>);
}

export default LoginModal;