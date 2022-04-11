import styled from 'styled-components'
import Colors from "../../assets/Colors";

export const NavBarWrapper = styled.div.attrs((props: { toTop: boolean }) => props)`
background-color: ${(props) => props.toTop ? 'black' : 'white'};
box-shadow: ${props => !props.toTop ? '2px 2px 9px 0px #0000000f' : ''};
display: flex; 
flex-direction: column;
z-index: 99999999;

`;

export const LinksWrapper = styled.div.attrs((props: { toTop: boolean }) => props)`
display: flex;
padding: 3vh 8vw;
align-items: center;
transition: all .2s ease;

.left {
    flex: 1;
    display: flex;
    align-items: flex-start;
}

.center {
    flex: 6;
    color: ${props => props.toTop ? 'white' : 'black'};

    .nav-link {
        position: relative;

        &::after {
            transition: all .2s ease-out;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            content: ' ';
            position: absolute;
            top: 100%;
            left: 0;
            border-radius: 5px;
            background-color: ${Colors.colorPrimary};
            transform-origin: left;
        }

        &.active::after{
            transform: scaleX(.6);
        }
    }

    > * {
        margin: 0 15px;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        user-select: none;

        &:hover {
            opacity: 1;
        }

        &:not(.active) {
            opacity: .8;
        }
    }
}

.right {
    flex: 1;
}`;


export const HamWrapper = styled.div`

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
export const SearchWrapper = styled.div`
   
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    min-width: fit-content;
    
    > div {
        display: flex;
        padding: 10px;
        height: 30px;
        background-color: white;
        border-radius: 999px;
        border: 1px solid lightgray;
        align-items: center;
        
            > input {
                border: none; 
                width: 300px;
            }
    }
`;

//#region STYLES
export const ProfileWrapper = styled.div.attrs((props: { type: 'dark' | 'light' }) => props)`
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
export const Menu = styled.div.attrs((props: { type: 'dark' | 'light' }) => props)`
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
color: ${props => props.type === 'light' ? 'black' : 'white'};

> div {
    text-align: left;
    user-select: none;
    cursor : pointer;
    padding: 10px 15px;
    
    &:hover {
        background-color: ${props => props.type === 'light' ? '#f1f1f1' : '#1a1a1a'};
    }

    &.sep {
        margin: 5px 0;
        width: 100%;
        background-color: ${props => props.type === 'light' ? '#ebebeb' : '#1a1a1a'};
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