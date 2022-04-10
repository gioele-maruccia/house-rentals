import React, {useState} from "react";
import {Button} from "@mui/material";
import './assets/scss/Header.scss';
import Search from "./elements/Search";

function Banner(){
    const [showSearch, setShowSearch] = useState(false);

    return(
        <div className='banner'>

            <div className='banner_info'>
                <h1>Spazio Banner</h1>
                <h4>da allestire successivamente</h4>
                <Button variant='outlined'>Esplora</Button>
            </div>

            <div className='banner_search'>
                <Button onClick={() =>
                        setShowSearch(!showSearch)}
                    className='banner_searchButton'
                    variant='outlined'>Data
                </Button>
                {showSearch && <Search />}
            </div>

        </div>
    )
}

export default Banner