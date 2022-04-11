import React, {CSSProperties, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Hamburger} from "./Hamburger";
import { 
    User
} from "firebase/auth";
import { NavLink } from "react-router-dom";
import {ProfileWrapper, Menu} from "./NavBar.styles";

//#endregion

type ActionType = 'login' | 'signup' | 'logout' 
type ProfileMenuProps = {
    onCommand: (command: ActionType) => void
    type? : 'light' | 'dark'
    style?: CSSProperties
    user?: User | null
}

const ProfileMenu = ({
                         onCommand,
                         style, user, type = 'light',
                     }: ProfileMenuProps) => {

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

    const triggerCommand = (action: ActionType) => {
        setMenuVisible(false)
        onCommand(action)
    }


    return (
        <ProfileWrapper style={style} ref={wrapperRef} type={type}>

            <div className="row center nowrap">
                {user != null && <h4> Welcome {user?.email}</h4> }
                <Hamburger onPress={() => setMenuVisible(!menuVisible)}/>
                <i className="ml-15 fa-solid fa-user-circle"></i>
            </div>

            {
                menuVisible &&
                <Menu className="anim-slide-in-from-top" type={type}>
                    <div onClick={() => triggerCommand('login')}>Login</div>
                    <div onClick={() => triggerCommand('signup')}>Sign up</div>
                    {user != null && <div onClick={() => triggerCommand('logout')}>Logout</div>}
                    <div className="sep"></div>
                    <div>
                        <NavLink to="/profile" 
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setMenuVisible(false)}>Profile</NavLink>
                    </div>
                    <div>
                        <NavLink to="/favourites"
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setMenuVisible(false)}>Favourites</NavLink>
                    </div>
                    <div>
                        <NavLink to="/become_an_host"
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setMenuVisible(false)}>Become an host</NavLink>
                    </div>
                    <div>
                        <NavLink to="/DEV"
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setMenuVisible(false)}>DEV</NavLink>
                    </div>
                </Menu>
            }
        </ProfileWrapper>
    )
}

export {ProfileMenu}
