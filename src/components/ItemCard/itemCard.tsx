import React from 'react'
import './itemCard.scss'

type cardInfo = {
    name: string,
    price: number,
    info: string,
    image: string
}

export const ItemCard  = ({name, price, info, image}: cardInfo) => 
    <div className='card'>
        <h1>{name}</h1>
        <p>{'$' + price}</p>
        <p>{'info:' + info}</p>
        <p>{'image:' + image}</p>
    </div>
