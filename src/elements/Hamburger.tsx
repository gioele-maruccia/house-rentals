import React, { CSSProperties } from "react";
import '../assets/scss/elements/Hamburger.scss'

type HamburgerProps = {
    onPress : () => void
    style? : CSSProperties
}

const Hamburger = ({ onPress, style } : HamburgerProps) => {
    return (
        <div className="hamburger-wrapper" style={style} onClick={onPress}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

export { Hamburger } 