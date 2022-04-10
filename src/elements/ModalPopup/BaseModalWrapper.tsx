import React, {MouseEventHandler, ReactNode} from 'react'
import Modal from "./Modal";
import { Message, CloseSign} from "./ModalPopup.styles";

export interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onClose: () => void;
    message?: string;
    content?: ReactNode; // allows to pass a react components via Props
}

interface ComponentsProps {
    ContainerComponent: React.ComponentType<{}>,
    CloseButtonComponent: React.ComponentType<{
        onClick?: MouseEventHandler<any>
    }>
}

type Props = BaseModalWrapperProps & ComponentsProps;

const BaseModalWrapper: React.FC<Props> = ({
                                               onClose,
                                               isModalVisible,
                                               message,
                                               ContainerComponent,
                                               CloseButtonComponent,
                                               content
                                           }) => {
    if (!isModalVisible) {
        return null
    }

    return (<Modal onClose={onClose}>
        <ContainerComponent>
            <CloseButtonComponent onClick={onClose}>
                <CloseSign/>
            </CloseButtonComponent>
            {message && <Message>{message}</Message>}
            {content}
        </ContainerComponent>
    </Modal>);
}

export default BaseModalWrapper