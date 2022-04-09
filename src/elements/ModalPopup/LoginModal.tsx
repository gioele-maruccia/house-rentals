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
}

const LoginModal: React.FC<LoginModalProps> = ({onClose, isModalVisible, loginError, onLoginRequested}) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (<RWDModal
        onClose={onClose}
        isModalVisible={isModalVisible}
        header="Login"
        message="please log in"
        content={
            <>
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
                <div className="mb-20 row center">
                    <Button type='dark' onClick={onClose}>Cancel</Button>
                    <Button type='dark' onClick={()=>onLoginRequested({loginPassword, loginEmail})}>Log In</Button>
                </div>
            </>
        }
    />);
}

export default LoginModal;