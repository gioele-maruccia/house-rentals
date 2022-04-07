import React from 'react'
import MediaQuery from "react-responsive";
import BaseModalWrapper, {BaseModalWrapperProps} from "./BaseModalWrapper";
import {DesktopCloseButton} from "./ModalPopup.styles";
import {DesktopModalContainer} from "./ModalPopup.styles";

type RWDModalProps = BaseModalWrapperProps;

const RWDModal: React.FC<RWDModalProps> = (props) => {
    return (<MediaQuery minWidth={580}>
        {(matches:any) => matches ? (
            <BaseModalWrapper
                CloseButtonComponent = {DesktopCloseButton}
                ContainerComponent = {DesktopModalContainer}
                {...props}
            />
        ) : (
            <div>Another thing here</div>
        )
    }
    </MediaQuery>);
}

export default RWDModal