import React from 'react';
import '../assets/scss/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/icons-material/AccountCircle';
import {Button} from "@mui/material";

function Header(){

    const Separator = () => <span> &middot; </span>;

    return (
        <div className='header'>

            {/* Website icons */}   {/* Image to change */}
            <img className="header_icon"
                 src="https://pngimg.com/uploads/beach/beach_PNG3.png" alt=""/>

            {/* Search text field + icon */}
            <div className="header_center">

                <Button className='banner_whereButton'
                        variant='outlined'>Dove</Button>
                <Separator />

                <Button className='banner_checkInButton'
                        variant='outlined'>Check-In</Button>
                <Separator />

                <Button className='banner_checkOutButton'
                        variant='outlined'>Check-Out</Button>
                <Separator />

                <Button className='banner_guestButton'
                        variant='outlined'>Ospiti</Button>

                <SearchIcon />

            </div>

            {/* User field and settings */}
            <div className="header_right">
                <p>Diventa un host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header