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
        <h1 className='name'>{name}</h1>
        <p className='image'>{'image:' + image}</p>
        <p className='price'>{'$' + price}</p>
        <p className='info'>{'info:' + info}</p>
    </div>
