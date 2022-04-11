import React, { CSSProperties } from "react";
import {HamWrapper} from "./NavBar.styles";

type HamburgerProps = {
    onPress : () => void
    style? : CSSProperties
}

const Hamburger = ({ onPress, style } : HamburgerProps) => {
    return (
        <HamWrapper style={style} onClick={onPress}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </HamWrapper>
    )
}

export { Hamburger } 