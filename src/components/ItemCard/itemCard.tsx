import React from 'react'
import './itemCard.scss'

import conImage from './PS2.jpg'

type cardInfo = {
    name: string,
    price: number,
    info: string,
    image: string
}

export const ItemCard  = ({name, price, info, image}: cardInfo) => 
    <div className='card'>
        <div className='infoDisplay'>
            <div>
                <h1 className='name'>{name}</h1>
                <img className='img' src={conImage} alt='image'/>
                <h3 className='price'>{'$' + price}</h3>
            </div>
            <p className='infoShow'>{info}</p>
        </div> 
    </div>
