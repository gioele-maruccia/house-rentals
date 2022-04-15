import React from "react";
import { TextWriting } from '../../elements/TextWriting';
import '../../assets/scss/Banner.scss';

function Banner(){

    return(
        <div className="banner">
                <TextWriting
                    style={{ minWidth: '230px', textAlign: 'left', marginTop: '45px' }}
                    invariantTextColor='white'
                    invariantText='We are '
                    textToWrite={['building.  ', 'creating. ', 'working.  ' ]}
                />
        </div>
    )
}

export default Banner