import React, {CSSProperties, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Hamburger} from "../Hamburger";
import { 
    User
} from "firebase/auth";
import { NavLink } from "react-router-dom";
import Colors from "../../assets/Colors";

//#region STYLES
const Wrapper = styled.div.attrs((props : { type : 'dark' | 'light'}) => props)`
display: inline-block;
background-color: ${props => props.type === 'light' ? '#f7f7f7' : '#121212'};
border-radius: 10px;
position: relative;
padding: 10px 15px;
transition: all .2s ease-out;
color: ${props => props.type === 'light' ? 'black' : '#fffffff0'};

i {
    font-size: 25px;
}
`
const Menu = styled.div.attrs((props : { type : 'dark' | 'light'}) => props)`
position: absolute;
top: 105%;
right: 0;
width: 100%;
min-width: 250px;
box-sizing: border-box;
background-color: inherit;
border-radius: inherit;
padding: 10px 0;
z-index: 99999999999;
color: ${props => props.type==='light' ? 'black' : 'white'};

> div {
    text-align: left;
    user-select: none;
    cursor : pointer;
    padding: 10px 15px;
    
    &:hover {
        background-color: ${props => props.type==='light' ? '#f1f1f1' : '#1a1a1a'};
    }

    &.sep {
        margin: 5px 0;
        width: 100%;
        background-color: ${props => props.type==='light' ? '#ebebeb' : '#1a1a1a'};
        height: 2px;
        border-radius: 5px;
        padding:0;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .nav-link {
        position: relative;

        &.active::after {
            content: ' ';
            position: absolute;
            left: -15px;
            height: 100%;
            top: 0
            border-radius: 5px;
            width: 3px;
            background-color: ${Colors.colorPrimary};
        }
    }
}
`
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
        <Wrapper style={style} ref={wrapperRef} type={type}>

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
        </Wrapper>
    )
}

export {ProfileMenu}
