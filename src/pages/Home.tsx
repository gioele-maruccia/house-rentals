import React, { useState } from 'react';
import Banner from '../Banner';
import '../assets/scss/Home.scss';
import { TextWriting } from '../elements/TextWriting';
import { Input } from '../elements/Input';
import { Button } from '../elements/Button';

function Home() {
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    
    return(
        <div className='home'>

            <Banner />
            
            <TextWriting invariantText='We are ' 
                textToWrite={['Coming.   ', 'Working.   ', 'Creating.   ']}
                // textToWrite={['Prima', 'Seconda', 'Terza', 'Pensa alla salute', 'Forza Bitonto', 'Alessandro Bilzerian']}
            />

            <div style={{ width: '20vw', minWidth: '350px', margin: '20px auto'}}>
                <Input 
                    value={inputValue1}
                    onValueChange={setInputValue1}
                    hint='Es. john.doe@gmail.com'
                    label='Email'
                />

                <button onClick={() => alert(inputValue1)}>SHOW INPUT</button>
            </div>

            <div style={{ width: '20vw', minWidth: '350px', margin: '20px auto'}}>
                <Input 
                    type='password'
                    value={inputValue2}
                    onValueChange={setInputValue2}
                    hint='Not 123456'
                    label='Password'
                />

                <button onClick={() => alert(inputValue2)}>SHOW INPUT</button>
            </div>

            <div className="mb-20 row center">
                <Button type='dark' onClick={() => alert('Clicked')}>CLICK ME</Button>
                <Button type='success' onClick={() => alert('Clicked')}>CLICK ME</Button>
                <Button type='warning' onClick={() => alert('Clicked')}>CLICK ME</Button>
                <Button type='error' onClick={() => alert('Clicked')}>CLICK ME</Button>
            </div>
        </div>
    )
}

export default Home