import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Hamburger } from "./Hamburger";

//#region STYLES
const Wrapper = styled.div`
display: inline-block;
background-color: #f7f7f7;
border-radius: 10px;
position: relative;
padding: 10px 15px;

i {
    font-size: 25px;
}
`
const Menu = styled.div`
position: absolute;
top: 105%;
right: 0;
width: 100%;
min-width: 250px;
box-sizing: border-box;
background-color: inherit;
border-radius: inherit;
padding: 10px 0;
z-index: 999999;

> div {
    text-align: left;
    user-select: none;
    cursor : pointer;
    padding: 10px 15px;
    color: black;
    font-weight: light;
    
    &:hover {
        background-color: #f1f1f1;
    }

    &.sep {
        margin: 5px 0;
        width: 100%;
        background-color: #ebebeb;
        height: 2px;
        border-radius: 5px;
        padding:0;
    }
}
`
//#endregion

type ActionType = 'login' | 'signup' | 'profile' | 'favourites' | 'become_an_host'
type ProfileMenuProps = {
    onCommand : (command : ActionType) => void
    style? : CSSProperties
}

const ProfileMenu = ({ 
    onCommand,
    style
} : ProfileMenuProps) => {

    const wrapperRef = useRef(null as any)

    const [menuVisible, setMenuVisible] = useState(false)
    
    useEffect(() => {
        // Detect outside-of-component click
        document.addEventListener('click', e => {
            const clickedOutside = !wrapperRef.current?.contains(e.target)
            if (clickedOutside && menuVisible)
                setMenuVisible(false)
        })
    }, [wrapperRef])

    const triggerCommand = (action : ActionType) => {
        setMenuVisible(false)
        onCommand(action)
    }


    return (
        <Wrapper style={style} ref={wrapperRef}>
            <div className="row center nowrap">
                <Hamburger onPress={() => setMenuVisible(!menuVisible)} />
                <i className="ml-15 fa-solid fa-user-circle"></i>
            </div>

            {
                menuVisible &&
                    <Menu className="anim-slide-in-from-top">
                        <div onClick={() => triggerCommand('login')}>Login</div>
                        <div onClick={() => triggerCommand('signup')}>Sign up</div>
                        <div className="sep"></div>
                        <div onClick={() => triggerCommand('profile')}>Profile</div>
                        <div onClick={() => triggerCommand('favourites')}>Favourites</div>
                        <div onClick={() => triggerCommand('become_an_host')}>Become an host</div>
                    </Menu>
            }
        </Wrapper>
    )
}

export { ProfileMenu }
