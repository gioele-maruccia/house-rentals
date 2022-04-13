import React, {useState} from "react";
import {Button} from "@mui/material";
import './assets/scss/Header.scss';

function Banner(){
    const [showSearch, setShowSearch] = useState(false);

    return(
        <div className='banner'>

            <div className='banner_info'>
                <h1>Spazio Banner</h1>
                <h4>da allestire successivamente</h4>
                <Button variant='outlined'>Esplora</Button>
            </div>

        </div>
    )
}

export default Banner