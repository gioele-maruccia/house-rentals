import React, { CSSProperties } from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";

const Wrapper = styled.div`

.bar {
    width: 35px;
    height: 3px;
    background-color: ${Colors.colorPrimary};
    border-radius: 20px;
    transition: all .2s ease;
    transform-origin : left;

    &:not(:last-of-type) {
        margin-bottom: 5px;
    }
}

.bar:nth-child(1) {
    transform : scaleX(.9);
}

.bar:nth-child(2) {
    transform : scaleX(.6);
}

.bar:nth-child(3) {
   transform : scaleX(.75);
}

&:hover .bar {
    transform : scaleX(1);
}
`
type HamburgerProps = {
    onPress : () => void
    style? : CSSProperties
}

const Hamburger = ({ onPress, style } : HamburgerProps) => {
    return (
        <Wrapper style={style} onClick={onPress}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </Wrapper>
    )
}

export { Hamburger } 