import React from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";

const Wrapper = styled.div`
display: inline-block;
cursor: pointer;
transition: transform .2s ease;
border: 3px solid;
padding: 6px 10px;
font-weight: bolder;

&:hover {
    transform: translateY(1px);
    border-bottom-width: 4px;
}
`

type ButtonProps = {
    onClick : () => void
    children : JSX.Element | JSX.Element | string 

    type? : 'dark' | 'light' | 'success' | 'error' | 'warning'
    size? : 'normal' | 'small' | 'big'
}

const Button = ({
    onClick,
    children,
    type = 'dark',
    size = 'normal'
} : ButtonProps) => {

    const getFontSize = () => {
        switch (size) {
            case 'big' : return '1.5em'
            case 'normal' : return '1em'
            case 'small' : return '.75em'
        }
    }

    const getColor = () => {
        switch (type) {
            case 'dark' : return Colors.colorDark
            case 'light' : return Colors.colorLight
            case 'success' : return Colors.colorSuccess
            case 'warning' : return Colors.colorWarning
            case 'error' : return Colors.colorError
        }
    }

    return (
        <Wrapper style={
            {
                fontSize : getFontSize(),
                color: getColor(),
                borderColor: getColor(),
                borderBottomColor: getColor()
            }
        } onClick={onClick}>

            { children }

        </Wrapper>
    )
}

export { Button }