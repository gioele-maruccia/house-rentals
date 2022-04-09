import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import Colors from "../assets/Colors";

type InputProps = {
    value : string
    label : string
    onValueChange? : (s : string) => void
    type? : 'text' | 'password'
    hint? : string
    style? : CSSProperties
    className? : string
}

 //#region STYLES
const Wrapper = styled.div`
        
box-sizing: border-box;
position : relative;
display: flex;
align-items: center;
font-weight: normal;

input {
    background-color: #f3f3f3;
    border-radius: 7px;
    padding: 25px 10px 10px 10px;
    display: inline-block;
    outline: none;
    border:none;
    font-size: 1.2em;
    transition: .2s ease;
    font-family: 'Inter', monospace, sans-serif;
    width: 100%;
    position : relative;

    &:focus {
        box-shadow: 0 0 0 2px ${Colors.colorPrimary};
    }

    &::placeholder {
        opacity: .4;
        font-size: .8em;
    }

}

.label {
    position: absolute;
    left: 10px;
    transform: translateY(-60%);
    opacity: .4;
    transition: transform .2s ease;
    user-select: none;
}

.password-toggle-command-wrapper {
    position: absolute;
    right: 15px;
}
`
//#endregion

const Input = ({

        value,
        onValueChange = () => {}, 
        type = 'text', 
        label,
        hint = 'Type here...',
        style,
        className

    } : InputProps) => {

    const [passwordVisible, setPasswordVisible] = useState(false)
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)

    return (
        <Wrapper style={style} className={className}>
            
            <input type={(type === 'password' && passwordVisible || type==='text') ? 'text' : 'password'} 
                value={value}
                onChange={e => onValueChange(e.target.value)}
                style={ type === 'password' ? { paddingRight: '45px' } : {}}
                placeholder={hint}
            />

            {
                label &&
                    <span className='label'>{ label }</span>
            }

            <div className="password-toggle-command-wrapper">
                {
                    type === 'password' && passwordVisible &&
                        <i className="fa-solid fa-eye-slash" onClick={togglePasswordVisibility}></i>
                }

                {
                    type === 'password' && !passwordVisible &&
                        <i className="fa-solid fa-eye" onClick={togglePasswordVisibility}></i>
                }
            </div>
        </Wrapper>
    )

}

export { Input }