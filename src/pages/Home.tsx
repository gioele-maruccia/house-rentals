import React from 'react';
import Banner from '../Banner';
import '../assets/scss/Home.scss';
import { TextWriting } from '../elements/TextWriting';

function Home() {
    return(
        <div className='home'>

            <div className="anim-pop-in">
                <h1>PROVA</h1>
            </div>

            <Banner />

            <TextWriting invariantText='Giovanotto, ' 
                textToWrite={['Prima', 'Seconda', 'Terza', 'Pensa alla salute', 'Forza Bitonto', 'Alessandro Bilzerian']}
            />

        </div>
    )
}

export default Home