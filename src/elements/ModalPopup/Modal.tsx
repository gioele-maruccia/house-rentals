import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
    onClose: () => void;
}

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed; 
    height: 100%; 
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

const Modal: React.FC<ModalProps> = ({onClose, children}) => {
    return ReactDOM.createPortal(<Overlay onClick={onClose}>
        <div onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </Overlay>, document.getElementById('modal-root')!);
}

export default Modal