import React, {useState} from 'react';
import RWDModal from "./RWDModal";
import {Error} from "./ModalPopup.styles";
import {Input} from "../Input";
import {Button} from "../Button";

interface LoginArgs {
    loginPassword: string;
    loginEmail: string;
}

export type LoginFunction = (args: LoginArgs) => Promise<void>;

interface LoginModalProps {
    onClose: () => void;
    isModalVisible: boolean;
    loginError?: string;
    onLoginRequested: LoginFunction;
    onLoginWithGoogleRequested: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({onClose, isModalVisible, loginError, onLoginRequested, onLoginWithGoogleRequested}) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (<RWDModal
        onClose={onClose}
        isModalVisible={isModalVisible}
        message="Login"
        content={
            <>
                <Button type='dark' onClick={onLoginWithGoogleRequested}>Google login</Button>
                <Input
                    value={loginEmail}
                    onValueChange={setLoginEmail}
                    hint='Es. john.doe@gmail.com'
                    label='Email'
                />
                <Input
                    type='password'
                    value={loginPassword}
                    onValueChange={setLoginPassword}
                    hint='Not 123456'
                    label='Password'
                />
                {loginError && <Error>{loginError}</Error>}
                <Button type='dark' onClick={()=>onLoginRequested({loginPassword, loginEmail})}>Log In</Button>
            </>
        }
    />);
}

export default LoginModal;