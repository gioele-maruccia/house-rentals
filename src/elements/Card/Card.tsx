import React from "react";
import '../../assets/scss/Card.css';

interface CardArgs {
    src: string,
    title: string,
    description:string,
    price?: number
}

const Card: React.FC<CardArgs> = ({src, title, description, price}) => {
    console.log(src);

    return (
        <div className='card'>
            <img src={src} alt="image not found" />
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card