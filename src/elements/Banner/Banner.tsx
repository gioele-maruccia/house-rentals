import React from "react";
import {TextWriting} from '../../elements/TextWriting';
import {BannerInfo} from "./Banner.styles";
import '../../assets/scss/Banner.scss';
import {Button} from "../Button";

function Banner() {

    return (
        <div className="banner">
            <BannerInfo>
                <h1>Get out and stretch your vula de mare</h1>
                <h4>Plan a different kind of gateway and minate ntra lu mare te lu salentu</h4>
                <TextWriting
                    style={{minWidth: '230px', textAlign: 'left'}}
                    invariantTextColor='white'
                    invariantText='We are '
                    textToWrite={['building.  ', 'creating. ', 'working.  ']}
                />
                <Button type='light' onClick={()=>0}>Explore</Button>
            </BannerInfo>
        </div>
    )
}

export default Banner