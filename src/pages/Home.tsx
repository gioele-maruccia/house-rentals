import React, { useState } from 'react';
import Banner from '../Banner';
import '../assets/scss/Home.scss';
import { TextWriting } from '../elements/TextWriting';
import { Input } from '../elements/Input';
import { Button } from '../elements/Button';
import { ProfileMenu } from '../elements/ProfileMenu';

function Home() {
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    
    return(
        <div className='home'>

            <h1>Home</h1>

        </div>
    )
}

export default Home