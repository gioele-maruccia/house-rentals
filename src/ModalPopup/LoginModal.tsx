import React from 'react';
import RWDModal from "./RWDModal";

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