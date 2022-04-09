import React, {useState} from 'react';
import RWDModal from "./RWDModal";
import {Error} from "./ModalPopup.styles";
import {Input} from "../Input";
import {Button} from "../Button";

interface RegisterArgs {
    registerPassword: string;
    registerEmail: string;
}

export type RegisterFunction = (args:RegisterArgs) => Promise<void>;

interface RegistrationModalProps {
    onClose: () => void;
    isModalVisible: boolean;
    registerError?: string;
    onRegisterRequested: RegisterFunction;
}

const RegisterModal: React.FC<RegistrationModalProps> = ({onClose, isModalVisible, registerError, onRegisterRequested}) => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    return (<RWDModal
        onClose={onClose}
        isModalVisible={isModalVisible}
        header="Registration form"
        message="please Register"
        content={
            <>
                <Input
                    value={registerEmail}
                    onValueChange={setRegisterEmail}
                    hint='Es. john.doe@gmail.com'
                    label='Email'
                />
                <Input
                    type='password'
                    value={registerPassword}
                    onValueChange={setRegisterPassword}
                    hint='Not 123456'
                    label='Password'
                />
                {registerError && <Error>{registerError}</Error>}
                <div className="mb-20 row center">
                    <Button type='dark' onClick={onClose}>Cancel</Button>
                    <Button type='dark' onClick={()=>onRegisterRequested({registerPassword, registerEmail})}>REGISTER</Button>
                </div>
            </>
        }
    />);
}

export default RegisterModal;